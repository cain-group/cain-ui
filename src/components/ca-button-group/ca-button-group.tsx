import { Component, Host, h, Prop } from '@stencil/core';
import { useNamespace, } from '../../hook/'
@Component({
  tag: 'ca-button-group',
  styleUrl: '../../scss/button-group.scss',
  shadow: false,
})
export class CaButtonGroup {

  @Prop() type: string;

  @Prop() size: string;



  getClass(): string {
    const ns = useNamespace('button')

    // const _type=  this.type || ''

    // const _size = useSize(computed(() => buttonGroupContext?.size))

    // const _size = this.size || '';
    return [
      ns.b('group'),
      // ns.m(_type),
      // ns.m(_size),
      // ns.is('disabled', this.disabled),
      // ns.is('loading', this.loading),
      // ns.is('plain', this.plain),
      // ns.is('round', this.round),
      // ns.is('circle', this.circle),
    ].join(' ')

  }

  render() {
    return (
      <Host>
        <div class={this.getClass()}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
