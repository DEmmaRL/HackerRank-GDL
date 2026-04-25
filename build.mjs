import { execSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const sessions = [
  { dir: 'resume-building-101',   filter: 'resume-building-101',           slug: 'resume-building-101' },
  { dir: 'technical-interview',   filter: 'hackerrank-crew-gdl-template',   slug: 'technical-interview' },
  { dir: 'asegura-tu-futuro',     filter: 'asegura-tu-futuro-en-big-tech',  slug: 'asegura-tu-futuro' },
];

const publicSlides = 'apps/hub/public/slides';

rmSync(publicSlides, { recursive: true, force: true });
mkdirSync(publicSlides, { recursive: true });

for (const { dir, filter, slug } of sessions) {
  console.log(`\n▶ Building: ${slug}`);
  execSync(`pnpm --filter ${filter} build`, { stdio: 'inherit' });
  cpSync(join('sessions', dir, 'dist'), join(publicSlides, slug), { recursive: true });
  console.log(`✓ ${slug} → ${publicSlides}/${slug}`);
}

console.log('\n▶ Building hub');
execSync('pnpm --filter hub build', { stdio: 'inherit' });
console.log('\n✓ Done');
