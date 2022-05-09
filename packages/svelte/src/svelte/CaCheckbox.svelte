
<script>
import { createEventDispatcher, onMount } from 'svelte';

let __ref;
let __mounted = false;

const dispatch = createEventDispatcher();

export let value = undefined;
export let label = undefined;
export let indeterminate = undefined;
export let disabled = undefined;
export let disabledByFahter = undefined;
export let checked = undefined;
export let name = undefined;
export let border = undefined;
export let size = undefined;
export let tabindex = undefined;



export const getWebComponent = () => __ref;

onMount(() => { __mounted = true; });

const setProp = (prop, value) => { if (__ref) __ref[prop] = value; };



const onEvent = (e) => {
  e.stopPropagation();
  dispatch(e.type, e.detail);
};
</script>

<ca-checkbox 
  value={value}
  label={label}
  indeterminate={indeterminate}
  disabled={disabled}
  disabled-by-fahter={disabledByFahter}
  checked={checked}
  name={name}
  border={border}
  size={size}
  tabindex={tabindex}
  on:checkboxChange={onEvent}
  bind:this={__ref}
>
  <slot></slot>
</ca-checkbox>
  