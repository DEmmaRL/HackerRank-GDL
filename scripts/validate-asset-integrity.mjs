#!/usr/bin/env node

/**
 * Validate Asset Integrity
 * Detects duplicate font files across projects using MD5 hashing
 * Helps identify redundant assets before migration
 */

import { readdir, readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const projectDirs = {
  'apps/hub': path.join(root, 'apps/hub/public'),
  'sessions/resume-building-101': path.join(root, 'sessions/resume-building-101/public'),
  'sessions/technical-interview': path.join(root, 'sessions/technical-interview/public'),
};

async function getFileHash(filePath) {
  const data = await readFile(filePath);
  return createHash('md5').update(data).digest('hex');
}

async function findFiles(dir, ext = null) {
  const files = [];
  try {
    const entries = await readdir(dir, { recursive: true, withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && (!ext || entry.name.endsWith(ext))) {
        files.push(path.join(entry.parentPath, entry.name));
      }
    }
  } catch (e) {
    // Directory does not exist
  }
  return files;
}

async function validateIntegrity() {
  console.log('Validating asset integrity...\n');

  const fontMap = new Map();
  const duplicates = [];

  // Map all fonts and detect duplicates
  for (const [project, dir] of Object.entries(projectDirs)) {
    const fonts = await findFiles(dir, '.woff2');
    for (const font of fonts) {
      try {
        const hash = await getFileHash(font);
        const fileName = path.basename(font);
        
        if (fontMap.has(fileName)) {
          const existing = fontMap.get(fileName);
          if (existing.hash === hash) {
            duplicates.push({ file: fileName, projects: [existing.project, project] });
          }
        } else {
          fontMap.set(fileName, { project, hash });
        }
      } catch (e) {
        // Skip unreadable files
      }
    }
  }

  // Report results
  if (duplicates.length > 0) {
    console.log('Duplicates found:\n');
    for (const dup of duplicates) {
      console.log(`  ${dup.file}:`);
      console.log(`    In: ${dup.projects.join(', ')}\n`);
    }
    console.log('Note: This is expected before migration.\n');
  } else {
    console.log('No duplicate fonts found\n');
  }

  console.log('Summary:');
  console.log(`  Total unique fonts: ${fontMap.size}`);
  console.log(`  Duplicates: ${duplicates.length}\n`);
}

validateIntegrity().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});
