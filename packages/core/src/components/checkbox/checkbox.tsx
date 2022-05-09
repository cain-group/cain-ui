import { Component, Host, h, Prop, Element, State,Event, EventEmitter } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
  tag: 'ca-checkbox',
  styleUrl: '../../scss/checkbox.scss',
  shadow: false,
})
export class Checkbox {

  @Prop() value: string = undefined;

  @Prop() label: string;

  @Prop() indeterminate: boolean;

  @Prop() disabled: boolean;

  @Prop() disabledByFahter: boolean;

  @Prop() checked: boolean = false;

  @Prop() name: string = undefined;

  @Prop() border: boolean;

  @Prop() size: string;

  @Prop() tabindex: number;

  @State() focus: boolean = false;

  @State() innerChecked: boolean;


  @Event({
    eventName: 'checkboxChange',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) checkboxChange: EventEmitter;


  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('checkbox')




  getCheckboxSize(): string {
    const fatherItem = this.el.parentElement
    return this.size || fatherItem.getAttribute('size') || ''
  }

  getIsDisabled(): boolean {

    const fatherItem = this.el.parentElement

    const fDisabled = fatherItem.getAttribute('disabled')

    return  this.disabled || (fDisabled && fDisabled !== 'false') || this.disabledByFahter

  }

  getIsChecked(): boolean {

    return this.checked

  }

  getHostClass(): string {
    const checkboxSize = this.getCheckboxSize()
    const isDisabled = this.getIsDisabled()
    const isChecked = this.getIsChecked();
    return [
      this.ns.b(),
      this.ns.m(checkboxSize),
      this.ns.is('disabled', isDisabled),
      this.ns.is('bordered', this.border),
      this.ns.is('checked', isChecked),
    ].join(' ')

  }

  getSpanClass(): string {

    const isDisabled = this.getIsDisabled()
    const isChecked = this.getIsChecked();


    return [
      this.ns.e('input'),
      this.ns.is('disabled', isDisabled),
      this.ns.is('checked', isChecked),
      this.ns.is('indeterminate', this.indeterminate),
      this.ns.is('focus', this.focus),
    ].join(' ')
  }

  handlerChange(e: InputEvent) {


    const target = e.target as HTMLInputElement

    this.checked = target.checked

    this.checkboxChange.emit(target.checked)

  }

  getInputDom() {

    const isDisabled = this.getIsDisabled()
    const isChecked = this.getIsChecked();
    return (
      <input
        value={this.label}
        checked={isChecked}
        class={this.ns.e('original')}
        type="checkbox"
        name={this.name}
        tabIndex={this.tabindex}
        disabled={isDisabled}
        onChange={(e: InputEvent) => this.handlerChange(e)}
        onFocus={() => { this.focus = true }}
        onBlur={() => { this.focus = false }}
      />
    )
  }

  getLableSlot() {
    return (
      <span class={this.ns.e('label')}>
        {this.label ? this.label : <slot />}
      </span>
    )
  }


  render() {

    return (
      <Host  >
        <label class={this.getHostClass()} role="checkbox">
          <span
            class={this.getSpanClass()}
            tabindex={this.indeterminate ? 0 : undefined}
          >
            <span class={this.ns.e('inner')} />
            {this.getInputDom()}
          </span>
          {this.getLableSlot()}

        </label>
      </Host>

    )
  }

}
