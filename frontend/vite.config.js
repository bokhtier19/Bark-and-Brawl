import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
	plugins: [react()],
	base: '/Bark-and-Brawl',
});
=======
  plugins: [react()],
    build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
})
>>>>>>> 2cd81c1f8246d4ed421d3be7ef526aef34b67be6
