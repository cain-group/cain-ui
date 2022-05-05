import { Component, Host, h, Prop, Element, State, } from '@stencil/core';
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

  @Prop() checked: boolean = false;

  @Prop() name: string = undefined;

  @Prop() trueLabel: [string, number] = undefined;

  @Prop() falseLabel: [string, number] = undefined;

  @Prop() border: boolean;

  @Prop() size: string;

  @Prop() min: [string, number];

  @Prop() max: [string, number];

  @Prop() tabindex: number;

  @State() focus: boolean = false;

  @State() innerChecked: boolean;






  // @Event() click: EventEmitter<Event>;

  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('checkbox')



  // getDisabled(): boolean {
  //   return this.disabled || this.loading
  // }

  getCheckboxSize(): string {
    // isGroup.value ? checkboxGroup?.checkboxGroupSize?.value : undefined
    return this.size
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
    return this.disabled

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
    console.log('getHostClass', isChecked)
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

    console.log('getSpanClass', isChecked)

    return [
      this.ns.e('input'),
      this.ns.is('disabled', isDisabled),
      this.ns.is('checked', isChecked),
      this.ns.is('indeterminate', this.indeterminate),
      this.ns.is('focus', this.focus),
    ].join(' ')
  }


  emitClick(e: MouseEvent) {
    console.log(e)
    // this.click.emit(e)
  }
  handlerChange(e: InputEvent) {
    // console.log(e.target.checked)


    // if (isLimitExceeded.value) return
    const target = e.target as HTMLInputElement
    console.log(target.checked)
    // const value = target.checked
    //   ? this.trueLabel ?? true
    //   : this.falseLabel ?? false
    // this.value = `${value}` 

    this.checked = target.checked



  }

  getInputDom() {
    // :tabindex="tabindex"
    //     :
    //     :true-value="trueLabel"
    //     :false-value="falseLabel"
    //     @change=    )

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


    // <span v-if="$slots.default || label" :class="ns.e('label')">
    //   <slot />
    //   <template v-if="!$slots.default">{{ label }}</template>
    // </span>

    // console.log(this.label, this.size, this.value)


    return (
      <span class={this.ns.e('label')}>
        {this.label ? this.label : <slot />}

      </span>
    )



  }


  render() {

    return (
      <Host class={this.getHostClass()}>
        <label class={this.getHostClass()} role="checkbox">
          <span
            class={this.getSpanClass()}
            tabindex={this.indeterminate ? 0 : undefined}

          >
            <span class={this.ns.e('inner')} />

            {this.getInputDom()}

          </span>


          {/* {
            this.el.slot || this.label ?
              <span class={this.ns.e('label')}>
                {!this.el.slot ? this.label : ''}
                <slot />
              </span> : ''

          } */}
          {this.getLableSlot()}
          {/* <slot /> */}

        </label>
      </Host>


    )
  }

}
