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

  @Prop() trueLabel: [string, number] = undefined;

  @Prop() falseLabel: [string, number] = undefined;

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

  // @Event() click: EventEmitter<Event>;

  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('checkbox')



  // getDisabled(): boolean {
  //   return this.disabled || this.loading
  // }

  getCheckboxSize(): string {
    const fatherItem = this.el.parentElement
    return this.size || fatherItem.getAttribute('size') || ''
  }

  getIsDisabled(): boolean {

    // const isLimitDisabled = computed(() => {
    //   const max = checkboxGroup.max?.value
    //   const min = checkboxGroup.min?.value
    //   return (
    //     (!!(max || min) && model.value.length >= max && !isChecked.value) ||
    //     (model.value.length <= min && isChecked.value)
    //   )
    // })

    // const isDisabled = computed(() => {
    //   const disabled = props.disabled || elForm.disabled
    //   return (
    //     (isGroup.value
    //       ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
    //       : props.disabled || elForm.disabled) ?? false
    //   )
    // })
   

    const fatherItem = this.el.parentElement

    let max = +Infinity
    let min = -Infinity
    if (fatherItem.getAttribute('max') !== null) {
      max = +fatherItem.getAttribute('max')
    }
    if (fatherItem.getAttribute('min') !== null) {
      min = +fatherItem.getAttribute('min')
    }

    //   return (
    //     (!!(max || min) && model.value.length >= max && !isChecked.value) ||
    //     (model.value.length <= min && isChecked.value)
    //   )

    // 
    // const list = Array.from(fatherItem.children).filter((item: HTMLInputElement) => {
    //   return item.checked
    // })
    // let maxMinDisabled = false

    // const isChecked =   this.getIsChecked()

    // if(list.length>=max && !isChecked){
    //   maxMinDisabled = true
    // }

    // console.log('getIsDisabled',maxMinDisabled)

    const fDisabled = fatherItem.getAttribute('disabled')

    return  this.disabled || (fDisabled && fDisabled !== 'false') || this.disabledByFahter

  }

  getIsChecked(): boolean {

    // const value = this.checked
    // if ( value === 'true') {
    //   return true
    // } 
    // return false

    // if(this.checked){
    //   return true
    // }
    return this.checked


    // else if (Array.isArray(value)) {
    //   return value.includes((this.label as unknown as string))
    // } 
    // else if (value !== null && value !== undefined) {
    //   return value === this.trueLabel
    // }
    //  else {
    // return !!value
    // }
    // return value === 'true'

  }

  getHostClass(): string {

    // const fatherItem = this.el.parentElement.parentElement
    // const _type = this.type || fatherItem.getAttribute('type') || ''

    // const _size = this.size || fatherItem.getAttribute('size') || ''


    // const _size = useSize(computed(() => buttonGroupContext?.size))
    const checkboxSize = this.getCheckboxSize()
    const isDisabled = this.getIsDisabled()
    const isChecked = this.getIsChecked();
    // console.log('getHostClass')
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
    // console.log('getSpanClass')


    return [
      this.ns.e('input'),
      this.ns.is('disabled', isDisabled),
      this.ns.is('checked', isChecked),
      this.ns.is('indeterminate', this.indeterminate),
      this.ns.is('focus', this.focus),
    ].join(' ')
  }

  handlerChange(e: InputEvent) {


    // if (isLimitExceeded.value) return
    const target = e.target as HTMLInputElement
    // const value = target.checked
    //   ? this.trueLabel ?? true
    //   : this.falseLabel ?? false
    // this.value = `${value}` 


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
