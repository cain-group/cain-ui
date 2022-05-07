import { Component, Host, h, Prop, Element, State, Listen, Watch } from '@stencil/core';
import { useNamespace, } from '../../hook'

@Component({
    tag: 'ca-checkbox-group',
    styleUrl: '../../scss/checkbox-group.scss',
    shadow: false,
})
export class CheckboxGroup {


    @Prop() disabled: boolean;

    @Prop() min: string;

    @Prop() max: string;

    @Prop() size: string;

    @Prop() value: string = undefined;


    @Element() el: HTMLElement;


    @State() ns: any = useNamespace('checkbox')




    @Listen('checkboxChange')
    checkboxChangeHandler(event: CustomEvent) {
        const isChecked = event.detail

        const childrenList = Array.from(this.el.children)


        let max = +Infinity
        let min = -Infinity
        if (this.max) {
            max = +this.max
        }
        if (this.min) {
            min = +this.min
        }


        const list = childrenList.filter((item: HTMLInputElement) => {
            return item.checked
        })

        // 清空disabled
        childrenList.forEach((child: HTMLInputElement) => {
            child.removeAttribute('disabled-by-fahter')
        })

        // 处理max内容
        if (list.length >= max && isChecked) {
            childrenList.forEach((child: HTMLInputElement) => {
                const input = child.querySelector('input[type="checkbox"]') as HTMLInputElement
                if (!child.getAttribute('disabled-by-fahter') && !input.checked) {
                    child.setAttribute('disabled-by-fahter', '')
                }
            })
        }

        // 处理min内容
        if (list.length <= min && !isChecked) {
            childrenList.forEach((child: HTMLInputElement) => {
                const input = child.querySelector('input[type="checkbox"]') as HTMLInputElement
                if (!child.getAttribute('disabled-by-fahter') && input.checked) {
                    child.setAttribute('disabled-by-fahter', '')
                }

            })
        }
        const newVal = list.map((child: HTMLInputElement) => {
            const input = child.querySelector('input[type="checkbox"]') as HTMLInputElement
            return input.value
        }).join(',')
        this.el.setAttribute('value', newVal)

    }


    @Watch('value')
    changeValueHandler(newValue: string, oldValue: string) {
        if (newValue && newValue !== oldValue) {

            const valList: Array<string> = newValue.split(',')

            const childrenList = Array.from(this.el.children)
            childrenList.forEach((child: HTMLInputElement) => {
                const input = child.querySelector('input[type="checkbox"]') as HTMLInputElement
                if (input && valList.includes(input.value)) {
                    child.setAttribute('checked', '')
                }
            })

        }

    }


    componentDidLoad() {
        this.changeValueHandler(this.value, null)
    }

    // getIsDisabled(): boolean {

    //     // const isLimitDisabled = computed(() => {
    //     //   const max = checkboxGroup.max?.value
    //     //   const min = checkboxGroup.min?.value
    //     //   return (
    //     //     (!!(max || min) && model.value.length >= max && !isChecked.value) ||
    //     //     (model.value.length <= min && isChecked.value)
    //     //   )
    //     // })

    //     // const isDisabled = computed(() => {
    //     //   const disabled = props.disabled || elForm.disabled
    //     //   return (
    //     //     (isGroup.value
    //     //       ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
    //     //       : props.disabled || elForm.disabled) ?? false
    //     //   )
    //     // })
    //     return this.disabled

    // }

    // getIsChecked(): boolean {

    //     // const value = this.checked
    //     // if ( value === 'true') {
    //     //   return true
    //     // } 
    //     // return false

    //     // if(this.checked){
    //     //   return true
    //     // }
    //     // return this.checked


    //     // else if (Array.isArray(value)) {
    //     //   return value.includes((this.label as unknown as string))
    //     // } 
    //     // else if (value !== null && value !== undefined) {
    //     //   return value === this.trueLabel
    //     // }
    //     //  else {
    //     // return !!value
    //     // }
    //     // return value === 'true'

    // }

    // getHostClass(): string {

    //     // const fatherItem = this.el.parentElement.parentElement
    //     // const _type = this.type || fatherItem.getAttribute('type') || ''

    //     // const _size = this.size || fatherItem.getAttribute('size') || ''


    //     // const _size = useSize(computed(() => buttonGroupContext?.size))
    //     const checkboxSize = this.getCheckboxSize()
    //     const isDisabled = this.getIsDisabled()
    //     const isChecked = this.getIsChecked();
    //     console.log('getHostClass', isChecked)
    //     return [
    //         this.ns.b(),
    //         this.ns.m(checkboxSize),
    //         this.ns.is('disabled', isDisabled),
    //         this.ns.is('bordered', this.border),
    //         this.ns.is('checked', isChecked),
    //     ].join(' ')

    // }

    // getSpanClass(): string {


    //     const isDisabled = this.getIsDisabled()
    //     const isChecked = this.getIsChecked();

    //     console.log('getSpanClass', isChecked)

    //     return [
    //         this.ns.e('input'),
    //         this.ns.is('disabled', isDisabled),
    //         this.ns.is('checked', isChecked),
    //         this.ns.is('indeterminate', this.indeterminate),
    //         this.ns.is('focus', this.focus),
    //     ].join(' ')
    // }


    // emitClick(e: MouseEvent) {
    //     console.log(e)
    //     // this.click.emit(e)
    // }
    // handlerChange(e: InputEvent) {
    //     // console.log(e.target.checked)


    //     // if (isLimitExceeded.value) return
    //     const target = e.target as HTMLInputElement
    //     console.log(target.checked)
    //     // const value = target.checked
    //     //   ? this.trueLabel ?? true
    //     //   : this.falseLabel ?? false
    //     // this.value = `${value}` 

    //     this.checked = target.checked



    // }

    // getInputDom() {
    //     // :tabindex="tabindex"
    //     //     :
    //     //     :true-value="trueLabel"
    //     //     :false-value="falseLabel"
    //     //     @change=    )

    //     const isDisabled = this.getIsDisabled()
    //     const isChecked = this.getIsChecked();
    //     return (
    //         <input
    //             value={this.label}
    //             checked={isChecked}
    //             class={this.ns.e('original')}
    //             type="checkbox"
    //             name={this.name}
    //             tabIndex={this.tabindex}
    //             disabled={isDisabled}
    //             onChange={(e: InputEvent) => this.handlerChange(e)}
    //             onFocus={() => { this.focus = true }}
    //             onBlur={() => { this.focus = false }}
    //         />
    //     )
    // }

    // getLableSlot() {


    //     // <span v-if="$slots.default || label" :class="ns.e('label')">
    //     //   <slot />
    //     //   <template v-if="!$slots.default">{{ label }}</template>
    //     // </span>

    //     // console.log(this.label, this.size, this.value)


    //     return (
    //         <span class={this.ns.e('label')}>
    //             {this.label ? this.label : <slot />}

    //         </span>
    //     )



    // }


    render() {

        return (
            <Host class={this.ns.b('group')} role="group">
                <slot />
            </Host>
        )
    }

}
