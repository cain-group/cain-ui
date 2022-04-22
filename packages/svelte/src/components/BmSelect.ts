/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmSelectProps {
  
  /** Control classes */
  controlClass?: Components.BmSelect["controlClass"]
  
  /** Color */
  color?: Components.BmSelect["color"]
  
  /** Size */
  size?: Components.BmSelect["size"]
  
  /** State */
  state?: Components.BmSelect["state"]
  
  /** Allows multiple selection */
  isMultiple?: Components.BmSelect["isMultiple"]
  
  /** Loading state */
  isLoading?: Components.BmSelect["isLoading"]
  
  /** Rounded */
  isRounded?: Components.BmSelect["isRounded"]
  
  /** Icon */
  icon?: Components.BmSelect["icon"]
}

interface BmSelectEvents {
  
}

interface BmSelectSlots {
  default: any
}
  
/* generated by Svelte v3.46.4 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let bm_select;
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			bm_select = element("bm-select");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_select, "control-class", /*controlClass*/ ctx[0]);
			set_custom_element_data(bm_select, "color", /*color*/ ctx[1]);
			set_custom_element_data(bm_select, "size", /*size*/ ctx[2]);
			set_custom_element_data(bm_select, "state", /*state*/ ctx[3]);
			set_custom_element_data(bm_select, "is-multiple", /*isMultiple*/ ctx[4]);
			set_custom_element_data(bm_select, "is-loading", /*isLoading*/ ctx[5]);
			set_custom_element_data(bm_select, "is-rounded", /*isRounded*/ ctx[6]);
			set_custom_element_data(bm_select, "icon", /*icon*/ ctx[7]);
		},
		m(target, anchor) {
			insert(target, bm_select, anchor);

			if (default_slot) {
				default_slot.m(bm_select, null);
			}

			/*bm_select_binding*/ ctx[12](bm_select);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[10], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*controlClass*/ 1) {
				set_custom_element_data(bm_select, "control-class", /*controlClass*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(bm_select, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*size*/ 4) {
				set_custom_element_data(bm_select, "size", /*size*/ ctx[2]);
			}

			if (!current || dirty & /*state*/ 8) {
				set_custom_element_data(bm_select, "state", /*state*/ ctx[3]);
			}

			if (!current || dirty & /*isMultiple*/ 16) {
				set_custom_element_data(bm_select, "is-multiple", /*isMultiple*/ ctx[4]);
			}

			if (!current || dirty & /*isLoading*/ 32) {
				set_custom_element_data(bm_select, "is-loading", /*isLoading*/ ctx[5]);
			}

			if (!current || dirty & /*isRounded*/ 64) {
				set_custom_element_data(bm_select, "is-rounded", /*isRounded*/ ctx[6]);
			}

			if (!current || dirty & /*icon*/ 128) {
				set_custom_element_data(bm_select, "icon", /*icon*/ ctx[7]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(bm_select);
			if (default_slot) default_slot.d(detaching);
			/*bm_select_binding*/ ctx[12](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { controlClass = undefined } = $$props;
	let { color = undefined } = $$props;
	let { size = undefined } = $$props;
	let { state = undefined } = $$props;
	let { isMultiple = undefined } = $$props;
	let { isLoading = undefined } = $$props;
	let { isRounded = undefined } = $$props;
	let { icon = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(8, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function bm_select_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(8, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('controlClass' in $$props) $$invalidate(0, controlClass = $$props.controlClass);
		if ('color' in $$props) $$invalidate(1, color = $$props.color);
		if ('size' in $$props) $$invalidate(2, size = $$props.size);
		if ('state' in $$props) $$invalidate(3, state = $$props.state);
		if ('isMultiple' in $$props) $$invalidate(4, isMultiple = $$props.isMultiple);
		if ('isLoading' in $$props) $$invalidate(5, isLoading = $$props.isLoading);
		if ('isRounded' in $$props) $$invalidate(6, isRounded = $$props.isRounded);
		if ('icon' in $$props) $$invalidate(7, icon = $$props.icon);
		if ('$$scope' in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		controlClass,
		color,
		size,
		state,
		isMultiple,
		isLoading,
		isRounded,
		icon,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_select_binding
	];
}

class BmSelect extends SvelteComponent {
  $$prop_def: BmSelectProps;
  $$events_def: BmSelectEvents;
  $$slot_def: BmSelectSlots;

  $on<K extends keyof BmSelectEvents>(type: K, callback: (e: BmSelectEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmSelectProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			controlClass: 0,
			color: 1,
			size: 2,
			state: 3,
			isMultiple: 4,
			isLoading: 5,
			isRounded: 6,
			icon: 7,
			getWebComponent: 9
		});
	}

	get controlClass() {
		return this.$$.ctx[0];
	}

	set controlClass(controlClass) {
		this.$$set({ controlClass });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get size() {
		return this.$$.ctx[2];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get state() {
		return this.$$.ctx[3];
	}

	set state(state) {
		this.$$set({ state });
		flush();
	}

	get isMultiple() {
		return this.$$.ctx[4];
	}

	set isMultiple(isMultiple) {
		this.$$set({ isMultiple });
		flush();
	}

	get isLoading() {
		return this.$$.ctx[5];
	}

	set isLoading(isLoading) {
		this.$$set({ isLoading });
		flush();
	}

	get isRounded() {
		return this.$$.ctx[6];
	}

	set isRounded(isRounded) {
		this.$$set({ isRounded });
		flush();
	}

	get icon() {
		return this.$$.ctx[7];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get getWebComponent(): HTMLBmSelectElement | undefined {
		return this.$$.ctx[9];
	}
}

export default BmSelect;