/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@cain-group/cain-ui';


interface CaLinkProps {
  
  /**  */
  type?: Components.CaLink["type"]
  
  /**  */
  disabled?: Components.CaLink["disabled"]
  
  /**  */
  underline?: Components.CaLink["underline"]
  
  /**  */
  href?: Components.CaLink["href"]
}

interface CaLinkEvents {
  
}

interface CaLinkSlots {
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
	let ca_link;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			ca_link = element("ca-link");
			if (default_slot) default_slot.c();
			set_custom_element_data(ca_link, "type", /*type*/ ctx[0]);
			set_custom_element_data(ca_link, "disabled", /*disabled*/ ctx[1]);
			set_custom_element_data(ca_link, "underline", /*underline*/ ctx[2]);
			set_custom_element_data(ca_link, "href", /*href*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, ca_link, anchor);

			if (default_slot) {
				default_slot.m(ca_link, null);
			}

			/*ca_link_binding*/ ctx[8](ca_link);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*type*/ 1) {
				set_custom_element_data(ca_link, "type", /*type*/ ctx[0]);
			}

			if (!current || dirty & /*disabled*/ 2) {
				set_custom_element_data(ca_link, "disabled", /*disabled*/ ctx[1]);
			}

			if (!current || dirty & /*underline*/ 4) {
				set_custom_element_data(ca_link, "underline", /*underline*/ ctx[2]);
			}

			if (!current || dirty & /*href*/ 8) {
				set_custom_element_data(ca_link, "href", /*href*/ ctx[3]);
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
			if (detaching) detach(ca_link);
			if (default_slot) default_slot.d(detaching);
			/*ca_link_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { type = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { underline = undefined } = $$props;
	let { href = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function ca_link_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('type' in $$props) $$invalidate(0, type = $$props.type);
		if ('disabled' in $$props) $$invalidate(1, disabled = $$props.disabled);
		if ('underline' in $$props) $$invalidate(2, underline = $$props.underline);
		if ('href' in $$props) $$invalidate(3, href = $$props.href);
		if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		type,
		disabled,
		underline,
		href,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		ca_link_binding
	];
}

class CaLink extends SvelteComponent {
  $$prop_def: CaLinkProps;
  $$events_def: CaLinkEvents;
  $$slot_def: CaLinkSlots;

  $on<K extends keyof CaLinkEvents>(type: K, callback: (e: CaLinkEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<CaLinkProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			type: 0,
			disabled: 1,
			underline: 2,
			href: 3,
			getWebComponent: 5
		});
	}

	get type() {
		return this.$$.ctx[0];
	}

	set type(type) {
		this.$$set({ type });
		flush();
	}

	get disabled() {
		return this.$$.ctx[1];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get underline() {
		return this.$$.ctx[2];
	}

	set underline(underline) {
		this.$$set({ underline });
		flush();
	}

	get href() {
		return this.$$.ctx[3];
	}

	set href(href) {
		this.$$set({ href });
		flush();
	}

	get getWebComponent(): HTMLCaLinkElement | undefined {
		return this.$$.ctx[5];
	}
}

export default CaLink;