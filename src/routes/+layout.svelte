<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Whiteboard from '$lib/demo/Whiteboard.svelte';
	import { slide } from 'svelte/transition';

	let { children } = $props();

	let whiteboardOn = $state(false);
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
