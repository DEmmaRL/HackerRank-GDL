#!/usr/bin/env node

/**
 * Prebuild All Script
 * Executes prebuild script in all projects to sync shared assets to public directories
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const projects = [
  { name: 'apps/hub', cwd: path.join(root, 'apps/hub') },
  { name: 'sessions/asegura-tu-futuro', cwd: path.join(root, 'sessions/asegura-tu-futuro') },
  { name: 'sessions/resume-building-101', cwd: path.join(root, 'sessions/resume-building-101') },
  { name: 'sessions/technical-interview', cwd: path.join(root, 'sessions/technical-interview') },
];

function runCommand(cmd, args, cwd, name) {
  return new Promise((resolve, reject) => {
    console.log(`\nRunning prebuild: ${name}\n`);
    const child = spawn(cmd, args, { 
      cwd, 
      stdio: 'inherit',
      shell: true
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log(`Prebuild successful: ${name}\n`);
        resolve();
      } else {
        console.error(`Prebuild failed for ${name} (exit code: ${code})\n`);
        reject(new Error(`${name} failed with code ${code}`));
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}

async function runPrebuildAll() {
  console.log('\nRunning prebuild in all projects...\n');
  console.log('Note: Ensure pnpm install has been executed\n');

  try {
    for (const project of projects) {
      await runCommand('pnpm', ['run', 'prebuild'], project.cwd, `Prebuild ${project.name}`);
    }

    console.log('\nAll prebuild tasks completed successfully\n');
    console.log('You can now run:');
    console.log('  cd sessions/resume-building-101 && pnpm dev');
    console.log('  cd sessions/technical-interview && pnpm dev');
    console.log('  cd apps/hub && pnpm dev\n');
  } catch (e) {
    console.error(`\nError: ${e.message}\n`);
    process.exit(1);
  }
}

runPrebuildAll();
