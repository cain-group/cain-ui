
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let span = undefined;
export let offset = undefined;
export let pull = undefined;
export let push = undefined;
export let xs = undefined;
export let sm = undefined;
export let md = undefined;
export let lg = undefined;
export let xl = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<ca-col 
  span={span}
  offset={offset}
  pull={pull}
  push={push}
  xs={xs}
  sm={sm}
  md={md}
  lg={lg}
  xl={xl}
  
  bind:this={__ref}
>
  <slot></slot>
</ca-col>
  