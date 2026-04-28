#!/usr/bin/env node

import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/**
 * Test Suite: Workspace Configuration
 * Validates pnpm workspace and shared-assets package configuration
 */
describe('Workspace Configuration', () => {
  it('pnpm-workspace.yaml should include packages/* directory', async () => {
    const workspacePath = path.join(root, 'pnpm-workspace.yaml');
    const content = await readFile(workspacePath, 'utf-8');
    
    expect(content).toContain('packages/*');
    expect(content).toContain('apps/*');
    expect(content).toContain('sessions/*');
  });

  it('shared-assets package.json should export correctly', async () => {
    const pkgPath = path.join(root, 'packages/shared-assets/package.json');
    const content = await readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(content);
    
    expect(pkg.name).toBe('@gdl/shared-assets');
    expect(pkg.exports).toBeDefined();
    expect(pkg.exports['.']).toBe('./dist');
    expect(pkg.exports['./fonts/*']).toBe('./dist/fonts/*');
    expect(pkg.exports['./logos/*']).toBe('./dist/logos/*');
    expect(pkg.exports['./images/*']).toBe('./dist/images/*');
  });

  it('root package.json should have test scripts', async () => {
    const pkgPath = path.join(root, 'package.json');
    const content = await readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(content);
    
    expect(pkg.scripts).toBeDefined();
    expect(pkg.scripts.test).toBeDefined();
    expect(pkg.scripts.test).toContain('vitest');
  });
});
