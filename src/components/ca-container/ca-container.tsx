import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-container',
  styleUrl: '../../scss/container.scss',
  shadow: false,
})
export class CaContainer {

  @Prop() direction: string;


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('container')





  getIsVertical(): boolean {


    const { namespace } = this.ns
    // const fatherItem = this.el

    if (this.direction === 'vertical') {
      return true
    }
    if (this.direction === 'horizontal') {
      return false
    }
    console.log(this.el)

    return Array.from(this.el.children).some(dom => {
      return [`${namespace}-header`, `${namespace}-footer`].includes(dom.tagName.toLowerCase())
    })


    // if (slots && slots.default) {
    //   const vNodes: VNode[] = slots.default()
    //   return vNodes.some((vNode) => {
    //     const tag = (vNode.type as Component).name
    //     return tag === 'ElHeader' || tag === 'ElFooter'
    //   })
    // } else {
    //   return false
    // }
  }
  getClass(): string {

    const isVertical = this.getIsVertical()

    return [this.ns.b(), this.ns.is('vertical', isVertical)].join(' ')


  }


  render() {


    return (
      <Host>
        <section class={this.getClass()}>
          <slot />
        </section>
      </Host >
    );
  }

}
