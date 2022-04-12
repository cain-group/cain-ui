import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'cain-ui',
  globalStyle:'src/global/app.css',
  plugins: [
    sass({})
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
