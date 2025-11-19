<script lang="ts">
	import Clock from '$lib/ref/Clock.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let step = $state(0);
	let on = $state(false);

	onMount(() => {
		on = true;
	});
</script>

{#if on}
	<h1 in:fade={{ duration: 2000 }}>
		readable state

		{#if step > 0}
			<div>
				<Clock size={50} />
			</div>
		{/if}
	</h1>
{/if}

<svelte:window
	on:keyup={(e) => {
		if (e.key === 'Enter') {
			step++;
		}
	}}
/>

<style>
	h1 {
		position: relative;

		font-family:
			DM Serif Display,
			Georgia,
			serif;

		div {
			position: absolute;
			top: 100%;
			width: 100%;
			margin: auto;
		}
	}
</style>
