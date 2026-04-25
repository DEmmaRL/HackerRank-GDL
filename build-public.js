import { readFileSync, writeFileSync, cpSync, rmSync, mkdirSync } from 'fs';
import { join } from 'path';

const publicDir = 'dist-public';

// Limpiar y crear directorio
rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });

// Copiar todo excepto resumes
cpSync('public', join(publicDir, 'public'), {
  recursive: true,
  filter: (src) => !src.includes('big tech resumes')
});

// Procesar slides.md - remover notas del orador y slides con resumes
const slides = readFileSync('slides.md', 'utf-8');
const cleanSlides = slides
  .replace(/<!--[\s\S]*?-->/g, '')
  .split(/\n---\n/)
  .filter(slide => !slide.includes('big tech resumes'))
  .join('\n---\n');
writeFileSync(join(publicDir, 'slides.md'), cleanSlides);

// Copiar archivos necesarios
['package.json', 'slidev.config.ts', 'style.css', 'netlify.toml', 'vercel.json'].forEach(file => {
  try { cpSync(file, join(publicDir, file)); } catch {}
});

['components', 'theme', 'pages', 'snippets'].forEach(dir => {
  try { cpSync(dir, join(publicDir, dir), { recursive: true }); } catch {}
});

console.log('✓ Versión pública generada en', publicDir);
