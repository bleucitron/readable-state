<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header></header>

{@render children()}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;
		padding: 1rem;
	}
</style>
