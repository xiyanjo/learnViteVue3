import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port:'3000'
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
