import { createSubscriber } from 'svelte/reactivity';
import { NOOP } from './helpers';

export class Readable<T> {
	#value = $state<T>();
	#subscribe: () => void = NOOP;

	constructor(initialValue: T, on: (set: (v: T) => void) => () => void) {
		this.#value = initialValue;

		this.#subscribe = createSubscriber(() => {
			const off = on((v) => {
				this.#value = v;
			});

			return off;
		});
	}

	get value() {
		this.#subscribe();
		return this.#value;
	}
}
