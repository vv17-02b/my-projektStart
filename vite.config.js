import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "@/scss/vars" as *;
          @use "@/scss/mixins" as *;
        `
            }
        }
    },
    base: '/my-projektStart/'// 💡 Додай це, якщо публікуєш на GitHub Pages
});
