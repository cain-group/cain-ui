import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-header',
  styleUrl: '../../scss/header.scss',
  shadow: false,
})
export class CaHeader {

  @Prop() height: string;


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('header')



  getStyle(): any {
    const p = {}
    if(this.height){
      p[ `--${this.ns.namespace}-header-height`] =  this.height
    }
    return p
  }


  render() {


    return (
      <Host>
        <header class={this.ns.b()} style={this.getStyle()}>
          <slot />
        </header>
      </Host >
    );
  }

}
