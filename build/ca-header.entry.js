import{r as registerInstance,h,e as Host,g as getElement}from"./index-0ba6dc0c.js";import{u as useNamespace}from"./index-825400a2.js";const headerCss=".ca-header{--ca-header-padding:0 20px;--ca-header-height:60px;padding:var(--ca-header-padding);box-sizing:border-box;flex-shrink:0;height:var(--ca-header-height)}",CaHeader=class{constructor(e){registerInstance(this,e),this.ns=useNamespace("header")}getStyle(){const e={};return this.height&&(e[`--${this.ns.namespace}-header-height`]=this.height),e}render(){return h(Host,null,h("header",{class:this.ns.b(),style:this.getStyle()},h("slot",null)))}get el(){return getElement(this)}};CaHeader.style=headerCss;export{CaHeader as ca_header};