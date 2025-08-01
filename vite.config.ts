import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001' // 代理API请求到后端服务器
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // 禁用代码分割
        inlineDynamicImports: true // 内联动态导入的资源
      }
    },
    cssCodeSplit: false, // 合并CSS
    assetsInlineLimit: 100000000, // 增大内联文件大小限制（100MB）
    minify: 'terser' // 压缩代码
  }
});