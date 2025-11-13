import { createSubscriber } from 'svelte/reactivity';
import { NOOP } from './helpers';

type SetValue<T> = (v: T) => void;
type On<T> = (set: SetValue<T>) => () => void;

export class Readable<T> {
	#value = $state<T | undefined>();
	#subscribe: () => void = NOOP;

	constructor(initialValue: T, on: On<T>) {
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

	subscribe(set: SetValue<T | undefined>) {
		const unsubscribe = $effect.root(() => {
			$effect(() => {
				this.#subscribe();

				set(this.#value);
			});
		});

		return unsubscribe;
	}
}
