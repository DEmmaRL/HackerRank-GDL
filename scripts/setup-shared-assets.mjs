#!/usr/bin/env node

/**
 * Asset Migration Script
 * Migrates fonts, logos, and images from individual projects to centralized shared-assets package
 */

import { cp, mkdir, rm } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sharedAssets = path.join(root, 'packages/shared-assets/src');

async function migrate() {
  console.log('Starting asset migration...\n');

  // Create directory structure
  const dirs = [
    `${sharedAssets}/fonts`,
    `${sharedAssets}/logos`,
    `${sharedAssets}/images/timeline`,
    `${sharedAssets}/images/intern-experience`,
    `${sharedAssets}/images/resumes`,
    `${sharedAssets}/images/stock`,
  ];

  for (const dir of dirs) {
    await mkdir(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }

  // Copy fonts from all sessions
  console.log('\nCopying fonts...');
  try {
    await cp(
      path.join(root, 'sessions/resume-building-101/public/fonts'),
      `${sharedAssets}/fonts`,
      { recursive: true, force: true }
    );
    console.log('Fonts copied from resume-building-101');
  } catch (e) {
    console.warn('Fonts not found in resume-building-101');
  }

  // Copy logos from all projects
  console.log('\nCopying logos...');
  try {
    await cp(
      path.join(root, 'apps/hub/public/logos'),
      `${sharedAssets}/logos`,
      { recursive: true, force: true }
    );
    console.log('Logos copied from apps/hub');
  } catch (e) {
    console.warn('Logos not found in apps/hub');
  }

  try {
    await cp(
      path.join(root, 'sessions/resume-building-101/public/assets/logos'),
      `${sharedAssets}/logos`,
      { recursive: true, force: true }
    );
    console.log('Logos copied from resume-building-101');
  } catch (e) {
    // May not exist
  }

  // Copy images from all sources
  console.log('\nCopying images...');
  const imageMappings = [
    {
      src: 'sessions/resume-building-101/public/assets',
      dest: `${sharedAssets}/images/assets`,
      name: 'resume-building-101 assets'
    },
    {
      src: 'sessions/technical-interview/public/assets',
      dest: `${sharedAssets}/images/technical-assets`,
      name: 'technical-interview assets'
    },
  ];

  for (const mapping of imageMappings) {
    try {
      const fullSrc = path.join(root, mapping.src);
      if (existsSync(fullSrc)) {
        await cp(fullSrc, mapping.dest, {
          recursive: true,
          force: true,
        });
        console.log(`Copied: ${mapping.name}`);
      }
    } catch (e) {
      console.warn(`Not found: ${mapping.src}`);
    }
  }

  console.log('\nMigration completed!\n');
  console.log('Next steps:');
  console.log('1. pnpm install (from root)');
  console.log('2. node scripts/validate-assets-structure.mjs');
  console.log('3. pnpm run prebuild-all');
  console.log('4. Test in browser\n');
}

migrate().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
