
let baseUrl = '/'
if(process.env.NODE_ENV === 'production'){
  baseUrl = '/cain-ui/'
}

const addStyles = `(function () {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '${baseUrl}build/cain-ui.css';
    window.document.head.appendChild(link);
  })()`;
  
export default [
    {src: `${baseUrl}build/cain-ui.esm.js`, type: 'module'},
    {src: `${baseUrl}build/cain-ui.js` , nomodule:true},
    addStyles,
  ]