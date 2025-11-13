import { createSubscriber } from 'svelte/reactivity';

export class Readable<T> {
	#value = $state<T | undefined>();
	#subscribe: (() => void) | void = undefined;

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
		this.#subscribe?.();
		return this.#value;
	}
}
