<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/global.css';

	import Whiteboard from '$lib/demo/Whiteboard.svelte';
	import { slide } from 'svelte/transition';

	let { children } = $props();

	let whiteboardOn = $state(false);

	const current = $derived(Number(page.url.pathname.substring(1)));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header></header>

<main class="centered">
	{@render children()}
</main>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'w') {
			whiteboardOn = !whiteboardOn;
		}
		if (e.key === 'n') {
			goto(`/${current + 1}`);
		}
		if (e.key === 'p') {
			goto(`/${current - 1}`);
		}
	}}
/>
{#if whiteboardOn}
	<div class="overlay" transition:slide={{ duration: 200 }}>
		<Whiteboard />
	</div>
{/if}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;
		padding: 1rem;
	}

	.overlay {
		width: 100vw;
		height: 100vh;
		position: fixed;
		inset: 0;
		padding: 1rem;
	}
</style>
