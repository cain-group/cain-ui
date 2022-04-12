import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-footer',
  styleUrl: '../../scss/footer.scss',
  shadow: true,
})
export class CaHeader {

  @Prop() height: string;


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('footer')



  getStyle(): any {
    const p = {}
    if(this.height){
      p[ `--${this.ns.namespace}-footer-height`] =  this.height
    }
    return p
  }


  render() {


    return (
      <Host>
        <footer class={this.ns.b()} style={this.getStyle()}>
          <slot />
        </footer>
      </Host >
    );
  }

}
