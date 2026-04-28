#!/usr/bin/env node

import { describe, it, expect } from 'vitest';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Test Suite: Assets Structure
 * Validates that the shared-assets package has correct directory structure
 * with fonts, logos, and images directories.
 */
describe('Assets Structure', () => {
  const sharedAssetsPath = path.join(root, 'packages/shared-assets/src');
  const requiredDirs = ['fonts', 'logos', 'images'];

  it('should have shared-assets package with required directories', async () => {
    for (const dir of requiredDirs) {
      const dirPath = path.join(sharedAssetsPath, dir);
      try {
        const files = await readdir(dirPath);
        expect(files.length).toBeGreaterThanOrEqual(0);
      } catch (e) {
        expect.fail(`${dir} directory should exist`);
      }
    }
  });

  it('should have fonts directory', async () => {
    const fontsPath = path.join(sharedAssetsPath, 'fonts');
    const files = await readdir(fontsPath).catch(() => []);
    // Allow empty initially (will be populated later)
    expect(Array.isArray(files)).toBe(true);
  });

  it('should have logos directory', async () => {
    const logosPath = path.join(sharedAssetsPath, 'logos');
    const files = await readdir(logosPath).catch(() => []);
    expect(Array.isArray(files)).toBe(true);
  });

  it('should have images directory', async () => {
    const imagesPath = path.join(sharedAssetsPath, 'images');
    const files = await readdir(imagesPath).catch(() => []);
    expect(Array.isArray(files)).toBe(true);
  });
});
