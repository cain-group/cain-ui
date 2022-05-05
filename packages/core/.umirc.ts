import { defineConfig } from 'dumi';
import headScripts from './docs/build/headScripts.js'
import componentMenus from './docs/menus.js'

const repo = 'cain-ui';



export default defineConfig({
  title: 'Cain UI',
  favicon:
    'https://raw.githubusercontent.com/cain-group/cain-ui/main/assets/logo.png',
  logo:
    'https://raw.githubusercontent.com/cain-group/cain-ui/main/assets/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  copy: [
    { from: '/www/build', to: 'build' },
  ],
  resolve:{
    includes:['docs'],
    // previewLangs:['jsx', 'tsx']
  },
  headScripts,
  menus: {
    '/components': componentMenus,
  },
  navs: [
    { title: '组件', path: '/components' },
    {
      title: 'GitHub',
      path: 'https://github.com/cain-group/cain-ui',
    },
  ],
  // more config: https://d.umijs.org/config
});