/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@cain-group/cain-ui';


interface CaRowProps {
  
  /**  */
  gutter?: Components.CaRow["gutter"]
  
  /**  */
  justify?: Components.CaRow["justify"]
  
  /**  */
  align?: Components.CaRow["align"]
}

interface CaRowEvents {
  
}

interface CaRowSlots {
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
	let ca_row;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			ca_row = element("ca-row");
			if (default_slot) default_slot.c();
			set_custom_element_data(ca_row, "gutter", /*gutter*/ ctx[0]);
			set_custom_element_data(ca_row, "justify", /*justify*/ ctx[1]);
			set_custom_element_data(ca_row, "align", /*align*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, ca_row, anchor);

			if (default_slot) {
				default_slot.m(ca_row, null);
			}

			/*ca_row_binding*/ ctx[7](ca_row);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*gutter*/ 1) {
				set_custom_element_data(ca_row, "gutter", /*gutter*/ ctx[0]);
			}

			if (!current || dirty & /*justify*/ 2) {
				set_custom_element_data(ca_row, "justify", /*justify*/ ctx[1]);
			}

			if (!current || dirty & /*align*/ 4) {
				set_custom_element_data(ca_row, "align", /*align*/ ctx[2]);
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
			if (detaching) detach(ca_row);
			if (default_slot) default_slot.d(detaching);
			/*ca_row_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { gutter = undefined } = $$props;
	let { justify = undefined } = $$props;
	let { align = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function ca_row_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('gutter' in $$props) $$invalidate(0, gutter = $$props.gutter);
		if ('justify' in $$props) $$invalidate(1, justify = $$props.justify);
		if ('align' in $$props) $$invalidate(2, align = $$props.align);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [gutter, justify, align, __ref, getWebComponent, $$scope, slots, ca_row_binding];
}

class CaRow extends SvelteComponent {
  $$prop_def: CaRowProps;
  $$events_def: CaRowEvents;
  $$slot_def: CaRowSlots;

  $on<K extends keyof CaRowEvents>(type: K, callback: (e: CaRowEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<CaRowProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			gutter: 0,
			justify: 1,
			align: 2,
			getWebComponent: 4
		});
	}

	get gutter() {
		return this.$$.ctx[0];
	}

	set gutter(gutter) {
		this.$$set({ gutter });
		flush();
	}

	get justify() {
		return this.$$.ctx[1];
	}

	set justify(justify) {
		this.$$set({ justify });
		flush();
	}

	get align() {
		return this.$$.ctx[2];
	}

	set align(align) {
		this.$$set({ align });
		flush();
	}

	get getWebComponent(): HTMLCaRowElement | undefined {
		return this.$$.ctx[4];
	}
}

export default CaRow;