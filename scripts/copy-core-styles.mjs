import { cpSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

// Run this from a framework package directory (e.g., packages/react or packages/solid)
// It copies the compiled CSS from core into the caller package's dist folder.

const corePath = resolve(process.cwd(), '..', 'core', 'dist', 'styles.css');
const destPath = resolve(process.cwd(), 'dist', 'styles.css');

mkdirSync(dirname(destPath), { recursive: true });
cpSync(corePath, destPath);


