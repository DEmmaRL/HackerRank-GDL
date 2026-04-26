import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync, statSync, existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sessions = [
  { dir: 'resume-building-101',   filter: 'resume-building-101',  slug: 'resume-building-101' },
  { dir: 'technical-interview',   filter: 'technical-interview',   slug: 'technical-interview' },
  { dir: 'asegura-tu-futuro',     filter: 'asegura-tu-futuro',     slug: 'asegura-tu-futuro' },
];

const publicSlides = 'apps/hub/public/slides';
const umamiScript = '<script defer src="https://umami-green-two.vercel.app/script.js" data-website-id="b8f63b69-e159-4a95-9832-521956adc2ab"></script>';

// Ensure the target directory exists instead of wiping it
if (!existsSync(publicSlides)) {
  mkdirSync(publicSlides, { recursive: true });
}

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

function needsRebuild(sessionDir, distDir) {
  if (!existsSync(distDir)) return true;
  const distMtime = statSync(distDir).mtimeMs;
  const files = getFilesRecursively(sessionDir);
  return files.some(f => statSync(f).mtimeMs > distMtime);
}

function injectAnalytics(indexPath, slug) {
  if (existsSync(indexPath)) {
    let content = readFileSync(indexPath, 'utf-8');
    if (!content.includes('umami-green-two')) {
      content = content.replace('</head>', `${umamiScript}\n</head>`);
      writeFileSync(indexPath, content);
      console.log(`  ✓ Analytics injected into ${slug}`);
    }
  }
}

for (const { dir, filter, slug } of sessions) {
  const sessionPath = join('sessions', dir);
  const targetPath = join(publicSlides, slug);
  const sessionDistPath = join(sessionPath, 'dist');
  const targetIndex = join(targetPath, 'index.html');

  console.log(`\n▶ Checking: ${slug}`);

  const skipBuild = !needsRebuild(sessionPath, targetPath) && existsSync(targetPath);

  if (!skipBuild) {
    console.log(`  Changes detected. Building ${slug}...`);
    execSync(`pnpm --filter ${filter} build`, { stdio: 'inherit' });

    // Clean and update target
    rmSync(targetPath, { recursive: true, force: true });
    mkdirSync(targetPath, { recursive: true });
    cpSync(sessionDistPath, targetPath, { recursive: true });
    
    injectAnalytics(targetIndex, slug);
    console.log(`✓ ${slug} updated successfully.`);
  } else {
    console.log(`  No changes. Verifying analytics...`);
    injectAnalytics(targetIndex, slug);
  }
}

console.log('\n▶ Building hub');
execSync('pnpm --filter hub build', { stdio: 'inherit' });
console.log('\n✓ All builds complete.');

