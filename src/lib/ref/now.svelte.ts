import { Readable } from './readable.svelte';

export const now = new Readable(new Date(), (set) => {
	set(new Date());

	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});
