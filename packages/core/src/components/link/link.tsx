import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

// import LoadingIcon from '@element-plus/icons-svg/loading.svg';
@Component({
  tag: 'ca-link',
  styleUrl: '../../scss/link.scss',
  shadow: false,
})
export class Link {

  @Prop() type: 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default' = 'default';

  @Prop() disabled: boolean = false;

  @Prop() underline: boolean = true;

  @Prop() href: string = '';




  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('link')



  // getDisabled(): boolean {
  //   return this.disabled || this.loading
  // }

  getClass(): string {

    // const fatherItem = this.el.parentElement.parentElement
    // const _type = this.type || fatherItem.getAttribute('type') || ''

    // const _size = this.size || fatherItem.getAttribute('size') || ''


    // const _size = useSize(computed(() => buttonGroupContext?.size))

    return [
      this.ns.b(),
      this.ns.m(this.type),
      this.ns.is('disabled', this.disabled),
      this.ns.is('underline', this.underline && !this.disabled),
    ].join(' ')

  }
  getHref() {
    return this.disabled || !this.href ? undefined : this.href
  }


  render() {

    return (
      <Host>
        <a
          class={this.getClass()}
          href={this.getHref()}
        >
          <slot></slot>
        </a>
      </Host >
    );
  }

}
