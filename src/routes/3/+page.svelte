<script lang="ts">
	import Clock from '$lib/ref/Clock.svelte';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { fade } from 'svelte/transition';

	let step = $state(-1);

	onMount(() => {
		step++;

		return on(window, 'keyup', (e) => {
			if (e.key === 'Enter') {
				step++;
			}

			if (step <= 1) {
				e.stopImmediatePropagation();
			}
		});
	});
</script>

{#if step >= 0}
	<h1 in:fade={{ duration: 2000 }}>
		readable state

		{#if step > 0}
			<div>
				<Clock size={50} />
			</div>
		{/if}
	</h1>
{/if}

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
