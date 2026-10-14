// Load the TypeScript config without esbuild's parent-directory discovery.
import { readFile, writeFile, unlink } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { transform } from 'esbuild';
import { build } from 'vite';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const temporaryConfig = fileURLToPath(new URL(`../.vite-validation-${process.pid}.mjs`, import.meta.url));
try {
  const source = await readFile(new URL('../vite.config.ts', import.meta.url), 'utf8');
  const compiled = await transform(source, { loader: 'ts', format: 'esm' });
  await writeFile(temporaryConfig, compiled.code, 'utf8');
  const config = (await import(pathToFileURL(temporaryConfig).href)).default;
  process.chdir(projectRoot);
  await build({ ...config, root: projectRoot, configFile: false });
} finally {
  await unlink(temporaryConfig).catch(error => { if (error.code !== 'ENOENT') throw error; });
}
