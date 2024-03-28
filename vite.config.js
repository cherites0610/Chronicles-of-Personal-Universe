import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin';
import vue from '@vitejs/plugin-vue'


export default defineConfig({
  plugins: [vue(), 
    AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      'vue',
      'vue-router',
      'vitest',
      'pinia'
    ]
  }), 
  codeInspectorPlugin({
    bundler: 'vite',
  }),],

  server: {
    host: '0.0.0.0'
  }
})
