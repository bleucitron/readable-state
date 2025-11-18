<script lang="ts">
	import Clock from '$lib/ref/Clock.svelte';

	let step = $state(0);
</script>

<h1>
	readable state

	{#if step > 0}
		<div>
			<Clock size={50} />
		</div>
	{/if}
</h1>

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
