import { defineConfig } from 'vite'
// import { cjs2esmVitePlugin } from 'cjs2esmodule'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // optimizeDeps:{
  //   include:['@cain-group/cain-ui'],
  // },
  plugins: [
    vue(),
    // cjs2esmVitePlugin(), // 将 commonjs 转化为 es module
  ],
  resolve: {
    // alias: [
    //   {
    //     find: '@cain-group/cain-ui-vue/dist/',
    //     replacement: '@cain-group/cain-ui-vue/dist/esm/index.esm.js',
    //   },
    // ],
  },
})
