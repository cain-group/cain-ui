
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let gutter = undefined;
export let justify = undefined;
export let align = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<ca-row 
  gutter={gutter}
  justify={justify}
  align={align}
  
  bind:this={__ref}
>
  <slot></slot>
</ca-row>
  