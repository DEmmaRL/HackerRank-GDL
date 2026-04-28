import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync, statSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Configuration and constants for the build process.
 */
const sessionsDir = 'sessions';
const publicSlides = 'apps/hub/public/slides';
const umamiScript = '<script defer src="https://umami-green-two.vercel.app/script.js" data-website-id="b8f63b69-e159-4a95-9832-521956adc2ab"></script>';

/**
 * Dynamically discover slide decks by scanning the sessions directory.
 * This ensures the build system automatically scales without manual registration.
 */
const sessions = readdirSync(sessionsDir)
  .filter(dir => {
    const fullPath = join(sessionsDir, dir);
    const pkgPath = join(fullPath, 'package.json');

    // Filter out non-directories and entries without a package.json
    if (!statSync(fullPath).isDirectory() || !existsSync(pkgPath)) {
      return false;
    }

    try {
      // Validate that the project is a Slidev presentation
      const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'));
      return pkg.devDependencies && pkg.devDependencies['@slidev/cli'];
    } catch (error) {
      console.error(`Error processing session ${dir}:`, error.message);
      return false;
    }
  })
  .map(dir => ({
    dir,
    filter: dir, // Target name for pnpm --filter commands
    slug: dir    // URL segment used in the Hub integration
  }));

console.log(`\nFound ${sessions.length} valid sessions: ${sessions.map(s => s.slug).join(', ')}`);

// Ensure the target directory for static slides exists
if (!existsSync(publicSlides)) {
  mkdirSync(publicSlides, { recursive: true });
}

/**
 * Recursively retrieves file paths to monitor for changes.
 */
function getFilesRecursively(dir) {
  const files = [];
  const items = readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      if (item.name === 'node_modules' || item.name === 'dist') continue;
      files.push(...getFilesRecursively(join(dir, item.name)));
    } else {
      if (['.md', '.vue', '.ts', '.css'].some(ext => item.name.endsWith(ext))) {
        files.push(join(dir, item.name));
      }
    }
  }
  return files;
}

/**
 * Determines if a session requires a rebuild based on file modification times.
 */
function needsRebuild(sessionDir, distDir) {
  if (!existsSync(distDir)) return true;
  const distMtime = statSync(distDir).mtimeMs;
  const files = getFilesRecursively(sessionDir);
  return files.some(f => statSync(f).mtimeMs > distMtime);
}

/**
 * Injects analytics scripts into the final HTML output.
 */
function injectAnalytics(indexPath, slug) {
  if (existsSync(indexPath)) {
    let content = readFileSync(indexPath, 'utf-8');
    if (!content.includes('umami-green-two')) {
      content = content.replace('</head>', `${umamiScript}\n</head>`);
      writeFileSync(indexPath, content);
      console.log(`  [INFO] Analytics injected into ${slug}`);
    }
  }
}

/**
 * Orchestrate the build process for each discovered session.
 */
for (const { dir, filter, slug } of sessions) {
  const sessionPath = join(sessionsDir, dir);
  const targetPath = join(publicSlides, slug);
  const sessionDistPath = join(sessionPath, 'dist');
  const targetIndex = join(targetPath, 'index.html');

  console.log(`\n[PROCESS] Checking session: ${slug}`);

  const skipBuild = !needsRebuild(sessionPath, targetPath) && existsSync(targetPath);

  if (!skipBuild) {
    console.log(`  [BUILD] Changes detected. Compiling ${slug}...`);
    execSync(`pnpm --filter ${filter} build`, { stdio: 'inherit' });

    // Deploy compiled output to the Hub public directory
    rmSync(targetPath, { recursive: true, force: true });
    mkdirSync(targetPath, { recursive: true });
    cpSync(sessionDistPath, targetPath, { recursive: true });
    
    injectAnalytics(targetIndex, slug);
    console.log(`[SUCCESS] ${slug} updated.`);
  } else {
    console.log(`  [SKIP] No changes detected. Verifying analytics integration.`);
    injectAnalytics(targetIndex, slug);
  }
}

// Final compilation of the Hub portal
console.log('\n[PROCESS] Building hub');
execSync('pnpm --filter hub build', { stdio: 'inherit' });
console.log('\n[COMPLETE] All tasks finished successfully.');
