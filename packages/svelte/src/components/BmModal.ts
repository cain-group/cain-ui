/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@bulmil/core';


interface BmModalProps {
  
  /** Is Active */
  isActive?: Components.BmModal["isActive"]
  
  /** Modal Card */
  hasModalCard?: Components.BmModal["hasModalCard"]
}

interface BmModalEvents {
  
}

interface BmModalSlots {
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
	let bm_modal;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			bm_modal = element("bm-modal");
			if (default_slot) default_slot.c();
			set_custom_element_data(bm_modal, "is-active", /*isActive*/ ctx[0]);
			set_custom_element_data(bm_modal, "has-modal-card", /*hasModalCard*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, bm_modal, anchor);

			if (default_slot) {
				default_slot.m(bm_modal, null);
			}

			/*bm_modal_binding*/ ctx[6](bm_modal);
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

			if (!current || dirty & /*isActive*/ 1) {
				set_custom_element_data(bm_modal, "is-active", /*isActive*/ ctx[0]);
			}

			if (!current || dirty & /*hasModalCard*/ 2) {
				set_custom_element_data(bm_modal, "has-modal-card", /*hasModalCard*/ ctx[1]);
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
			if (detaching) detach(bm_modal);
			if (default_slot) default_slot.d(detaching);
			/*bm_modal_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isActive = undefined } = $$props;
	let { hasModalCard = undefined } = $$props;
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

	function bm_modal_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('isActive' in $$props) $$invalidate(0, isActive = $$props.isActive);
		if ('hasModalCard' in $$props) $$invalidate(1, hasModalCard = $$props.hasModalCard);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		isActive,
		hasModalCard,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		bm_modal_binding
	];
}

class BmModal extends SvelteComponent {
  $$prop_def: BmModalProps;
  $$events_def: BmModalEvents;
  $$slot_def: BmModalSlots;

  $on<K extends keyof BmModalEvents>(type: K, callback: (e: BmModalEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<BmModalProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isActive: 0,
			hasModalCard: 1,
			getWebComponent: 3
		});
	}

	get isActive() {
		return this.$$.ctx[0];
	}

	set isActive(isActive) {
		this.$$set({ isActive });
		flush();
	}

	get hasModalCard() {
		return this.$$.ctx[1];
	}

	set hasModalCard(hasModalCard) {
		this.$$set({ hasModalCard });
		flush();
	}

	get getWebComponent(): HTMLBmModalElement | undefined {
		return this.$$.ctx[3];
	}
}

export default BmModal;