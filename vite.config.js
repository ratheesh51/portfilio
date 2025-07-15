import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Tells Vite to treat .js files as JSX
    include: /src\/.*\.js$/, // Optional: apply only in /src
  },
  server: {
    port: 3000
  }
});
