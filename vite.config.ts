import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

const rootDir = import.meta.dirname;

export default defineConfig(() => {
  const base = process.env.VITE_BASE_PATH || './';

  return {
    base,
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          notfound: path.resolve(rootDir, '404.html')
        }
      }
    },
    plugins: [
      {
        name: 'copy-static-site-folders',
        apply: 'build',
        transformIndexHtml(html, ctx) {
          if (base.startsWith('/') && ctx.filename.endsWith('404.html')) {
            const normalized = base.endsWith('/') ? base : `${base}/`;
            return html
              .replaceAll('href="./index.html', `href="${normalized}index.html`)
              .replaceAll('href="./assets/handbook.pdf"', `href="${normalized}assets/handbook.pdf"`);
          }
          return html;
        },
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(rootDir, 'dist');
          const folders = ['data', 'images', 'videos', 'assets'];
          for (const folder of folders) {
            const srcFolder = path.resolve(rootDir, folder);
            const destFolder = path.resolve(distDir, folder);
            if (fs.existsSync(distDir) && fs.existsSync(srcFolder)) {
              fs.cpSync(srcFolder, destFolder, { recursive: true, force: true });
            }
          }
          const swSrc = path.resolve(rootDir, 'sw.js');
          if (fs.existsSync(distDir) && fs.existsSync(swSrc)) {
            fs.copyFileSync(swSrc, path.resolve(distDir, 'sw.js'));
          }
          if (fs.existsSync(distDir)) {
            fs.writeFileSync(path.resolve(distDir, '.nojekyll'), '');
          }
        }
      }
    ],
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {}
    }
  };
});
