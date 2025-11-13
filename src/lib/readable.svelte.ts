import { createSubscriber } from 'svelte/reactivity';
import { NOOP } from './helpers';

export class Readable<T> {
	#value: T;
	#subscribe: () => void = NOOP;

	constructor(initialValue: T, on: (set: (v: T) => void) => () => void) {
		this.#value = initialValue;

		this.#subscribe = createSubscriber((update) => {
			const off = on((v) => {
				this.#value = v;
				update();
			});

			return off;
		});
	}

	get value() {
		this.#subscribe();
		return this.#value;
	}

	subscribe(set: (v: T) => void) {
		const unsubscribe = $effect.root(() => {
			$effect(() => {
				this.#subscribe();

				set(this.#value);
			});
		});

		return unsubscribe;
	}
}
