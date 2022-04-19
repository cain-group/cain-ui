import { Component, Host, h, Prop, Element, State} from '@stencil/core';
import { useNamespace, } from '../../hook/'

// import LoadingIcon from '@element-plus/icons-svg/loading.svg';
@Component({
  tag: 'ca-button',
  styleUrl: '../../scss/button.scss',
  shadow: false,
})
export class Button {

  @Prop() type: string;

  @Prop() disabled: boolean;

  @Prop() loading: boolean;

  @Prop() plain: boolean;

  @Prop() round: boolean;

  @Prop() autofocus: boolean;

  @Prop() circle: boolean;

  @Prop() size: string;

  @Prop() nativeType: string = 'button';


  // @Event() click: EventEmitter<Event>;

  @Element() el: HTMLElement;


  @State() ns: any = useNamespace('button')



  getDisabled(): boolean {
    return this.disabled || this.loading
  }

  getClass(): string {

    const fatherItem = this.el.parentElement.parentElement
    const _type = this.type || fatherItem.getAttribute('type') || ''

    const _size = this.size || fatherItem.getAttribute('size') || ''


    // const _size = useSize(computed(() => buttonGroupContext?.size))

    return [
      this.ns.b(),
      this.ns.m(_type),
      this.ns.m(_size),
      this.ns.is('disabled', this.disabled),
      this.ns.is('loading', this.loading),
      this.ns.is('plain', this.plain),
      this.ns.is('round', this.round),
      this.ns.is('circle', this.circle),
    ].join(' ')

  }
  emitClick(e: MouseEvent){
    console.log(e)
    // this.click.emit(e)
  }


  render() {


    const getLoadingStatus = () => {
      return this.loading ? (

        <ca-icon class={this.ns.is('loading')}>
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z" /></svg>
        </ca-icon>
      ) : null;
    }
    return (
      <Host>
        <button
          disabled={this.getDisabled()}
          class={this.getClass()}
          autoFocus={this.autofocus}
          type={this.nativeType}
        >
          {getLoadingStatus()}



          {/* <ca-icon v-else :class="ns.is('loading')">
      
      </ca-icon> */}
          {/* {LoadingIcon} */}
          <span>
            <slot></slot>
          </span>
        </button>
      </Host >
    );
  }

}
