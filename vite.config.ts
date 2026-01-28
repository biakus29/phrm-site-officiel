import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable minification for production
    minify: 'esbuild',
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React
          vendor: ['react', 'react-dom'],
          // Firebase in its own chunk
          firebase: ['firebase/app', 'firebase/firestore'],
          // UI libraries
          ui: ['lucide-react'],
        },
      },
    },
    // Enable source maps for debugging (optional)
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
  // Preload linked assets
  experimental: {
    renderBuiltUrl(filename) {
      return filename;
    },
  },
});

