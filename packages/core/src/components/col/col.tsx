import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-col',
  styleUrl: '../../scss/col.scss',
  shadow: false,
})
export class CaCol {

  @Prop() span: number = 24;

  @Prop() offset: number = 0;

  @Prop() pull: number = 0;

  @Prop() push: number = 0;

  @Prop() xs: number;

  @Prop() sm: number;

  @Prop() md: number;

  @Prop() lg: number;

  @Prop() xl: number;



  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('col')


  getStyle(): any {

 
    const gutter =  (this.el.parentElement.getAttribute('gutter') || 0) as number;
    
    if (gutter) {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      }
    }
    return {}
  }

  getClass(): string {
    const classes: string[] = []

    const pos = ['span', 'offset', 'pull', 'push'] as const
  
    pos.forEach((prop) => {
      const size = this[prop]
      if (typeof size === 'number') {
        if (prop === 'span') classes.push(this.ns.b(`${this[prop]}`))
        else if (size > 0) classes.push(this.ns.b(`${prop}-${this[prop]}`))
      }
    })

    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const


    sizes.forEach((size) => {
      if (typeof this[size] === 'number') {
        classes.push(this.ns.b(`${size}-${this[size]}`))
      } else if (typeof this[size] === 'object') {
        const sizeProps = this[size]
        Object.keys(sizeProps).forEach((prop) => {
          classes.push(
            prop !== 'span'
              ? this.ns.b(`${size}-${prop}-${sizeProps[prop]}`)
              : this.ns.b(`${size}-${sizeProps[prop]}`)
          )
        })
      }
    })
    // this is for the fix
    // if (gutter.value) {
    //   classes.push(ns.is('guttered'))
    // }

    return classes.join(' ')
  }


  render() {


    return (
      <Host class={this.getClass()} style={this.getStyle()}>
          <slot />
      </Host >
    );
  }

}
