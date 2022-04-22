import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { svelteOutputTarget } from '@stencil/svelte-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

import autoprefixer from 'autoprefixer';
export const config: Config = {
  namespace: 'cain-ui',
  // globalStyle:'src/global/app.css',
  globalStyle:'src/scss/base.scss',
  plugins: [
    sass({}),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    // reactOutputTarget({
    //   componentCorePackage: '@cain-group/cain-ui',
    //   proxiesFile: './warpper/react/src/components.ts',
    //   loaderDir: 'dist/loader',
    // }),

    // angularOutputTarget({
    //   componentCorePackage: '@cain-group/cain-ui',
    //   directivesProxyFile: './warpper/angular/src/directives/proxies.ts',
    // }),
    vueOutputTarget({
      componentCorePackage: '@cain-group/cain-ui',
      proxiesFile: './warpper/vue/src/components.ts',
    }),
    // svelteOutputTarget({
    //   accessors: true,
    //   componentCorePackage: '@cain-group/cain-ui',
    //   proxiesFile: './warpper/svelte/src/proxies.ts',
    // }),
    {
      type: 'dist',
      esmLoaderPath: './warpper/loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
