const addStyles = `(function () {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './build/cain-ui.css';
    window.document.head.appendChild(link);
  })()`;
export default [
    {src: './build/cain-ui.esm.js', type: 'module'},
    {src: './build/cain-ui.js' , nomodule:true},
    addStyles,
  ]