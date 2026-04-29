#!/usr/bin/env node

import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Test Suite: package.json Configuration
 * Validates that all projects have correct package.json structure
 * and dependencies configured properly
 */
describe('package.json Configuration', () => {
  const projects = [
    'apps/hub',
    'sessions/resume-building-101',
    'sessions/technical-interview',
  ];

  projects.forEach(projectPath => {
    it(`${projectPath}: package.json should exist`, async () => {
      const pkgPath = path.join(root, projectPath, 'package.json');
      try {
        const content = await readFile(pkgPath, 'utf-8');
        const pkg = JSON.parse(content);
        expect(pkg.name).toBeDefined();
      } catch (e) {
        expect.fail(`package.json not found in ${projectPath}`);
      }
    });
  });

  it('shared-assets package.json should have correct name', async () => {
    const pkgPath = path.join(root, 'packages/shared-assets/package.json');
    try {
      const content = await readFile(pkgPath, 'utf-8');
      const pkg = JSON.parse(content);
      
      expect(pkg.name).toBe('@hr-gdl/shared-assets');
      expect(pkg.exports).toBeDefined();
      expect(pkg.exports['.']).toBe('./dist');
    } catch (e) {
      expect.fail('shared-assets package.json invalid or missing');
    }
  });

  it('shared-assets should have build script', async () => {
    const pkgPath = path.join(root, 'packages/shared-assets/package.json');
    const content = await readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(content);
    
    expect(pkg.scripts).toBeDefined();
    expect(pkg.scripts.build).toBeDefined();
  });
});
