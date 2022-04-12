import { Component, Host, h, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-main',
  styleUrl: '../../scss/main.scss',
  shadow: true,
})
export class CaMain {



  // @Element() el: HTMLElement;


  @State() ns: any = useNamespace('main')


  render() {


    return (
      <Host>
        <main class={this.ns.b()}>
          <slot />
        </main>
      </Host >
    );
  }

}
