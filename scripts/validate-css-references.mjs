#!/usr/bin/env node

/**
 * Validate CSS References
 * Scans CSS files for broken asset references, particularly /src/assets paths
 * Verifies URLs are properly formatted for production builds
 */

import { readdir, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const cssProjects = [
  { name: 'apps/hub', files: ['src/styles/custom.css'] },
  { name: 'sessions/resume-building-101', files: ['style.css'] },
  { name: 'sessions/technical-interview', files: ['style.css'] },
];

// Regex to extract URLs from CSS
const urlRegex = /url\(['"]?([^'")\s]+)['"]?\)/g;

async function validateCssReferences() {
  console.log('Validating CSS references...\n');

  const issues = [];
  let totalUrls = 0;

  for (const project of cssProjects) {
    console.log(`Project: ${project.name}:`);
    
    for (const file of project.files) {
      const filePath = path.join(root, project.name, file);
      try {
        const content = await readFile(filePath, 'utf-8');
        const urlMatches = [...content.matchAll(urlRegex)];
        totalUrls += urlMatches.length;
        
        for (const match of urlMatches) {
          const url = match[1];
          
          // Validate URL format
          if (url.includes('/src/assets')) {
            issues.push({
              project: project.name,
              file,
              url,
              issue: 'Error: /src/assets path (should be /logos or /fonts)'
            });
          }
          
          // Validate relative vs absolute paths
          if (!url.startsWith('http') && !url.startsWith('/')) {
            issues.push({
              project: project.name,
              file,
              url,
              issue: 'Warning: Relative path (may not work in build)'
            });
          }
        }
        
        console.log(`  File: ${file}: ${urlMatches.length} URLs`);
      } catch (e) {
        if (e.code !== 'ENOENT') {
          console.log(`  File: ${file}: Error - ${e.message}`);
        }
      }
    }
    console.log('');
  }

  // Report results
  if (issues.length > 0) {
    console.log('\nIssues found:\n');
    for (const issue of issues) {
      console.log(`[${issue.project}] ${issue.file}`);
      console.log(`  URL: ${issue.url}`);
      console.log(`  ${issue.issue}\n`);
    }
    process.exit(1);
  } else {
    console.log(`All CSS references valid (${totalUrls} URLs)\n`);
  }
}

validateCssReferences().catch(e => {
  console.error('Error:', e);
  process.exit(1);
});

  process.exit(1);
});
