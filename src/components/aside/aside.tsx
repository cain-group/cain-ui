import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-aside',
  styleUrl: '../../scss/aside.scss',
  shadow: false,
})
export class CaAside {

  @Prop() width: string;


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('aside')



  getStyle(): any {
    const p = {}
    if(this.width){
      p[ `--${this.ns.namespace}-aside-width`] =  this.width
    }
    return p
  }


  render() {


    return (
      <Host>
        <aside class={this.ns.b()} style={this.getStyle()}>
          <slot />
        </aside>
      </Host >
    );
  }

}
