import { Readable } from './readable.svelte';

class Now extends Readable<Date> {
	constructor() {
		super(new Date(), (set) => {
			const interval = setInterval(() => {
				set(new Date());
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		});
	}
}

export const now = new Now();
