import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: 'hooks',
        replacement:fileURLToPath(new URL('./src/hooks', import.meta.url))
      },
      {
        find: 'common',
        replacement:fileURLToPath(new URL('./src/components/common', import.meta.url))
      },
      {
        find: 'components',
        replacement:fileURLToPath(new URL('./src/components', import.meta.url))
      },
    ]
  }
})
