<script lang="ts">
	import { onMount } from 'svelte';
	import { SvelteDate } from 'svelte/reactivity';

	const date = new SvelteDate();

	onMount(() => {
		setInterval(() => {
			date.setTime(Date.now());
		}, 1000);
	});
</script>

<p>{date.toLocaleTimeString('fr')}</p>

<style>
	p {
		font-family: monospace;
		text-align: center;
		font-size: var(--size, 3rem);
	}
</style>
