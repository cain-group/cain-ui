import{r as registerInstance,h,e as Host}from"./index-0ba6dc0c.js";import{u as useNamespace}from"./index-825400a2.js";const iconCss=".is-loading .ca-icon{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.ca-icon--right{margin-left:5px}.ca-icon--left{margin-right:5px}@-webkit-keyframes rotating{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes rotating{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}.ca-icon{--color:inherit;height:1em;width:1em;line-height:1em;display:inline-flex;justify-content:center;align-items:center;position:relative;fill:currentColor;color:var(--color);font-size:inherit}.ca-icon.is-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}.ca-icon svg{height:1em;width:1em}",CaIcon=class{constructor(i){registerInstance(this,i)}getClass(){const i=useNamespace("icon");return[i.b()].join(" ")}render(){return h(Host,null,h("i",{class:this.getClass()},h("slot",null)))}};CaIcon.style=iconCss;export{CaIcon as ca_icon};