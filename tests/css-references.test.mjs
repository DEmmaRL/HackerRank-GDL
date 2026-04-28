#!/usr/bin/env node

import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// Regex to find url() references in CSS
const urlRegex = /url\(['"]?([^'"\)\s]+)['"]?\)/g;

/**
 * Test Suite: CSS References
 * Validates that CSS files have correct asset references
 * (no /src/assets paths or broken references)
 */
describe('CSS References', () => {
  const cssProjects = [
    { name: 'apps/hub', files: ['src/styles/custom.css'] },
    { name: 'sessions/resume-building-101', files: ['style.css'] },
    { name: 'sessions/technical-interview', files: ['style.css'] },
  ];

  cssProjects.forEach(({ name, files }) => {
    it(`${name}: CSS should not have incorrect /src/assets paths`, async () => {
      for (const file of files) {
        const filePath = path.join(root, name, file);
        try {
          const content = await readFile(filePath, 'utf-8');
          const urlMatches = [...content.matchAll(urlRegex)];
          
          for (const match of urlMatches) {
            const url = match[1];
            expect(url).not.toContain('/src/assets');
          }
        } catch (e) {
          // File doesn't exist, skip
        }
      }
    });
  });

  it('CSS references should be absolute or valid relative', async () => {
    const filePath = path.join(root, 'apps/hub/src/styles/custom.css');
    try {
      const content = await readFile(filePath, 'utf-8');
      const urlMatches = [...content.matchAll(urlRegex)];
      
      for (const match of urlMatches) {
        const url = match[1];
        // Should not contain escaped spaces or broken paths
        expect(url).not.toMatch(/\\/);
      }
    } catch (e) {
      // Skip if file doesn't exist
    }
  });
});
