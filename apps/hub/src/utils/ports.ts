import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

let portsCache: Record<string, number> | null = null;

/**
 * Auto-discovers local development ports for Slidev sessions by parsing their package.json scripts.
 * This enables zero-configuration local proxying between the Hub and independent slide decks.
 */
export function getLocalSessionPorts(): Record<string, number> {
  // Cache the result to avoid redundant disk I/O during the dev server lifecycle
  if (portsCache) return portsCache;
  
  portsCache = {};
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    // Resolve monorepo root relative to this file (apps/hub/src/utils/ports.ts)
    const sessionsDir = path.resolve(__dirname, '../../../../sessions');
    
    if (fs.existsSync(sessionsDir)) {
      const sessions = fs.readdirSync(sessionsDir);
      
      for (const session of sessions) {
        const pkgPath = path.join(sessionsDir, session, 'package.json');
        if (fs.existsSync(pkgPath)) {
          const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
          const devScript = pkg.scripts?.dev || '';
          
          // Extract the port number from the Slidev dev script flag
          const match = devScript.match(/--port\s+(\d+)/);
          if (match) {
            portsCache[session] = parseInt(match[1], 10);
          }
        }
      }
    }
  } catch (e) {
    console.error("[Auto-Discovery] Error parsing session ports:", e);
  }
  
  return portsCache;
}
