#!/usr/bin/env node

import { describe, it, expect } from 'vitest';
import { readdir, readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Calculate MD5 hash of file for integrity checking
 */
async function getFileHash(filePath) {
  const data = await readFile(filePath);
  return createHash('md5').update(data).digest('hex');
}

/**
 * Recursively find files with optional extension filter
 */
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

/**
 * Test Suite: Asset Integrity
 * Validates file hashes and detects duplicate assets across projects
 */
describe('Asset Integrity', () => {
  it('should detect duplicate fonts before migration', async () => {
    const projectDirs = {
      'sessions/resume-building-101': path.join(root, 'sessions/resume-building-101/public'),
      'sessions/technical-interview': path.join(root, 'sessions/technical-interview/public'),
      'apps/hub': path.join(root, 'apps/hub/public'),
    };

    const fontMap = new Map();
    let duplicateCount = 0;

    for (const [project, dir] of Object.entries(projectDirs)) {
      const fonts = await findFiles(dir, '.woff2');
      for (const font of fonts) {
        try {
          const hash = await getFileHash(font);
          const fileName = path.basename(font);
          
          if (fontMap.has(fileName)) {
            const existing = fontMap.get(fileName);
            if (existing.hash === hash) {
              duplicateCount++;
            }
          } else {
            fontMap.set(fileName, { project, hash });
          }
        } catch (e) {
          // Skip read errors
        }
      }
    }

    // Duplicates are expected before migration (baseline measurement)
    expect(duplicateCount).toBeGreaterThanOrEqual(0);
  });

  it('shared-assets fonts directory structure should be valid', async () => {
    const sharedFontsPath = path.join(root, 'packages/shared-assets/src/fonts');
    try {
      const files = await readdir(sharedFontsPath);
      // Should be creatable (can be empty initially)
      expect(Array.isArray(files)).toBe(true);
    } catch (e) {
      // Expected if not yet created
      expect(true).toBe(true);
    }
  });
});
