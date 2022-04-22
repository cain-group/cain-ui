
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let type = undefined;
export let disabled = undefined;
export let loading = undefined;
export let plain = undefined;
export let round = undefined;
export let autofocus = undefined;
export let circle = undefined;
export let size = undefined;
export let nativeType = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<ca-button 
  type={type}
  disabled={disabled}
  loading={loading}
  plain={plain}
  round={round}
  autofocus={autofocus}
  circle={circle}
  size={size}
  native-type={nativeType}
  
  bind:this={__ref}
>
  <slot></slot>
</ca-button>
  