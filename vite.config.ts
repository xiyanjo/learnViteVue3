import path from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:'3000',

    // proxy: {
    //   '/api/': {
    //       target: 'http://10.136.214.70:3001/',
    //       changeOrigin: true,
    //       // rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  },
  resolve: {
    // 支持alias别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'views': path.resolve(__dirname, 'src/views'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils':path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],//这加上.vue
  },
  plugins: [vue()]
})
