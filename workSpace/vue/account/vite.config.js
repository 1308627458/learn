import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server: {
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://47.99.134.126:7009',
    //     rewrite: (path) => path.replace(/^\/api/, "/api"),
    //     changeOrigin: true
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
