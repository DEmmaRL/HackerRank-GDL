import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync, statSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const sessions = [
  { dir: 'resume-building-101',   filter: 'resume-building-101',  slug: 'resume-building-101' },
  { dir: 'technical-interview',   filter: 'technical-interview',   slug: 'technical-interview' },
  { dir: 'asegura-tu-futuro',     filter: 'asegura-tu-futuro',     slug: 'asegura-tu-futuro' },
];

const publicSlides = 'apps/hub/public/slides';

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

for (const { dir, filter, slug } of sessions) {
  const sessionPath = join('sessions', dir);
  const targetPath = join(publicSlides, slug);
  const sessionDistPath = join(sessionPath, 'dist');

  console.log(`\n▶ Checking: ${slug}`);

  const skipBuild = !needsRebuild(sessionPath, targetPath) && existsSync(targetPath);

  if (!skipBuild) {
    console.log(`  Building ${slug}...`);
    execSync(`pnpm --filter ${filter} build`, { stdio: 'inherit' });

    // Clean and update target
    rmSync(targetPath, { recursive: true, force: true });
    mkdirSync(targetPath, { recursive: true });
    cpSync(sessionDistPath, targetPath, { recursive: true });
    console.log(`✓ ${slug} → ${targetPath}`);
  } else {
    console.log(`  No changes. Skipping build.`);
  }
}

console.log('\n▶ Building hub');
execSync('pnpm --filter hub build', { stdio: 'inherit' });
console.log('\n✓ Done');

