import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/udi-starlink/',
  plugins: [react()],
});
