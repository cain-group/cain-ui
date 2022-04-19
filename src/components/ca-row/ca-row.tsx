import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-row',
  styleUrl: '../../scss/row.scss',
  shadow: false,
})
export class CaRow {

  @Prop() gutter: number = 0;


  @Prop() justify: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly' = 'start';


  @Prop() align: 'top' | 'middle' | 'bottom' | 'space-around' | 'space-between' | 'space-evenly' = 'top';


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('row')


  // @Event() innerGutterEvent: EventEmitter;


  getStyle(): any {
    const styles = {
      marginLeft: '',
      marginRight: '',
    }

    if (this.gutter) {
      styles.marginLeft = `-${this.gutter / 2}px`
      styles.marginRight = styles.marginLeft
      // this.innerGutterEvent.emit(this.gutter)
    }
    return styles
  }

  getClass(): string {


    return [
      this.ns.b(),
      this.ns.is(`justify-${this.justify}`, this.justify !== 'start'),
      this.ns.is(`align-${this.align}`, this.align !== 'top'),
    ].join(' ');

  }


  render() {


    return (
      <Host  class={this.getClass()} style={this.getStyle()}>
          <slot />
      </Host >
    );
  }

}
