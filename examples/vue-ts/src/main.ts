import { createApp } from 'vue'
import App from './App.vue'
import '@cain-group/cain-ui/dist/cain-ui/cain-ui.css';
import { applyPolyfills, defineCustomElements } from '@cain-group/cain-ui/loader';
// 

applyPolyfills().then(() => {
    defineCustomElements();
  });
  
createApp(App).mount('#app')
