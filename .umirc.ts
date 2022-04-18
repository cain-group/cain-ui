import { defineConfig } from 'dumi';
import headScripts from './docs/build/headScripts.js'
import componentMenus from './docs/menus.js'

const repo = 'cain-ui';



export default defineConfig({
  title: 'Cain UI',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  copy: [
    { from: '/www/build', to: 'build' },
  ],
  headScripts,
  menus: {
    '/components': componentMenus,
  },
  navs: [
    { title: '组件', path: '/components' },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi-template',
    },
  ],
  // more config: https://d.umijs.org/config
});