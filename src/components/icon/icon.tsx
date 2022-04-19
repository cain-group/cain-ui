import { Component, Host, h, } from '@stencil/core';
import { useNamespace, } from '../../hook/'

@Component({
  tag: 'ca-icon',
  styleUrl: '../../scss/icon.scss',
  shadow: false,
})
export class CaIcon {

  // @Prop() type: string;

  // @Prop() disabled: boolean;

  // @Prop() loading: boolean;

  // @Prop() plain: boolean;

  // @Prop() round: boolean;

  // @Prop() circle: boolean;

  // @Prop() size: string;

  // @Element() el: HTMLElement;



  // getDisabled(): boolean {
  //   return this.disabled || this.loading
  // }

  getClass(): string {
    const ns = useNamespace('icon')
  //   const fatherItem =  this.el.parentElement.parentElement
  //   const _type=  this.type || fatherItem.getAttribute('type') || ''

  //   const _size=  this.size || fatherItem.getAttribute('size') || ''


  //   // const _size = useSize(computed(() => buttonGroupContext?.size))

    return [
      ns.b(),
  //     ns.m(_type),
  //     ns.m(_size),
  //     ns.is('disabled', this.disabled),
  //     ns.is('loading', this.loading),
  //     ns.is('plain', this.plain),
  //     ns.is('round', this.round),
  //     ns.is('circle', this.circle),
    ].join(' ')

  }

  render() {
    return (
      <Host>
        <i class={this.getClass()}>
          <slot></slot>
        </i>
      </Host>
    );
  }

}
