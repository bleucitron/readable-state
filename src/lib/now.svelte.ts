import { createSubscriber } from 'svelte/reactivity';

class Now {
	#value = $state(new Date());
	#subscribe: (() => void) | void = undefined;

	constructor() {
		this.#subscribe = createSubscriber(() => {
			const interval = setInterval(() => {
				this.#value = new Date();
			}, 1000);

			return () => clearInterval(interval);
		});
	}

	get value() {
		this.#subscribe?.();
		return this.#value;
	}
}

export const now = new Now();
