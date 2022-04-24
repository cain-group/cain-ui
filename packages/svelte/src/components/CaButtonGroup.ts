/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@cain-group/cain-ui';


interface CaButtonGroupProps {
  
  /**  */
  type?: Components.CaButtonGroup["type"]
  
  /**  */
  size?: Components.CaButtonGroup["size"]
}

interface CaButtonGroupEvents {
  
}

interface CaButtonGroupSlots {
  default: any
}
  
/* generated by Svelte v3.47.0 */
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
	let ca_button_group;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			ca_button_group = element("ca-button-group");
			if (default_slot) default_slot.c();
			set_custom_element_data(ca_button_group, "type", /*type*/ ctx[0]);
			set_custom_element_data(ca_button_group, "size", /*size*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, ca_button_group, anchor);

			if (default_slot) {
				default_slot.m(ca_button_group, null);
			}

			/*ca_button_group_binding*/ ctx[6](ca_button_group);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*type*/ 1) {
				set_custom_element_data(ca_button_group, "type", /*type*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(ca_button_group, "size", /*size*/ ctx[1]);
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
			if (detaching) detach(ca_button_group);
			if (default_slot) default_slot.d(detaching);
			/*ca_button_group_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { type = undefined } = $$props;
	let { size = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function ca_button_group_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('type' in $$props) $$invalidate(0, type = $$props.type);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [type, size, __ref, getWebComponent, $$scope, slots, ca_button_group_binding];
}

class CaButtonGroup extends SvelteComponent {
  $$prop_def: CaButtonGroupProps;
  $$events_def: CaButtonGroupEvents;
  $$slot_def: CaButtonGroupSlots;

  $on<K extends keyof CaButtonGroupEvents>(type: K, callback: (e: CaButtonGroupEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<CaButtonGroupProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { type: 0, size: 1, getWebComponent: 3 });
	}

	get type() {
		return this.$$.ctx[0];
	}

	set type(type) {
		this.$$set({ type });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get getWebComponent(): HTMLCaButtonGroupElement | undefined {
		return this.$$.ctx[3];
	}
}

export default CaButtonGroup;