import{r as registerInstance,h,e as Host,g as getElement}from"./index-0ba6dc0c.js";import{u as useNamespace}from"./index-825400a2.js";const containerCss="ca-container{flex:1;flex-basis:auto}.ca-container{display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0}.ca-container.is-vertical{flex-direction:column}",CaContainer=class{constructor(e){registerInstance(this,e),this.ns=useNamespace("container")}getIsVertical(){const{namespace:e}=this.ns;return"vertical"===this.direction||"horizontal"!==this.direction&&(console.log(this.el),Array.from(this.el.children).some((t=>[`${e}-header`,`${e}-footer`].includes(t.tagName.toLowerCase()))))}getClass(){const e=this.getIsVertical();return[this.ns.b(),this.ns.is("vertical",e)].join(" ")}render(){return h(Host,null,h("section",{class:this.getClass()},h("slot",null)))}get el(){return getElement(this)}};CaContainer.style=containerCss;export{CaContainer as ca_container};