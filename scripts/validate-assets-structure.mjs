#!/usr/bin/env node

/**
 * Validate Assets Structure
 * Verifies that shared-assets package has all required directories and files
 */

import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const sharedAssetsPath = path.join(root, 'packages/shared-assets/src');
const requiredDirs = ['fonts', 'logos', 'images'];
const projectPaths = [
  { name: 'apps/hub', dir: path.join(root, 'apps/hub/public') },
  { name: 'sessions/resume-building-101', dir: path.join(root, 'sessions/resume-building-101/public') },
  { name: 'sessions/technical-interview', dir: path.join(root, 'sessions/technical-interview/public') },
];

async function getFileCount(dirPath) {
  try {
    const files = await readdir(dirPath, { recursive: true });
    return files.length;
  } catch (e) {
    return 0;
  }
}

async function validateStructure() {
  console.log('Validating asset structure...\n');

  let allGood = true;

  // Verify shared-assets structure
  console.log('packages/shared-assets/src/');
  for (const dir of requiredDirs) {
    const dirPath = path.join(sharedAssetsPath, dir);
    try {
      const count = await getFileCount(dirPath);
      if (count > 0) {
        console.log(`  ${dir}/: ${count} files`);
      } else {
        console.log(`  ${dir}/: empty (warning)`);
        allGood = false;
      }
    } catch (e) {
      console.error(`  ${dir}/: not found (error)`);
      allGood = false;
    }
  }

  // Verify workspace linking
  console.log('\nValidating node_modules/@hr-gdl/shared-assets:');
  for (const project of projectPaths) {
    const sharedNodePath = path.join(project.dir, 'node_modules/@hr-gdl/shared-assets/dist');
    try {
      const count = await getFileCount(sharedNodePath);
      if (count > 0) {
        console.log(`  ${project.name}: ${count} files`);
      } else {
        console.log(`  ${project.name}: empty (warning)`);
      }
    } catch (e) {
      console.log(`  ${project.name}: not linked yet`);
    }
  }

  console.log('\n' + (allGood ? 'Validation passed' : 'Warning: review issues above') + '\n');
  process.exit(allGood ? 0 : 1);
}

validateStructure().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
