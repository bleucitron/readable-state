<script lang="ts">
	import Clock from '$lib/ref/Clock.svelte';
	import { getRandomNumber } from '$lib/ref/helpers';
	import { fade } from 'svelte/transition';

	let step = $state(-1);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	const smallSize = 50;
	const steps = $derived([1, 10, Math.floor((innerHeight * innerWidth) / smallSize / smallSize)]);
</script>

{#if step <= steps.length}
	<div class="main-clock">
		<div>
			<Clock size={300} />
		</div>
	</div>

	{#if step >= 0}
		<div class="multiple">
			{#if step < steps.length}
				{#each { length: steps[step] }, i}
					<div
						class="clock-container"
						transition:fade={{
							duration: 200,
							delay: Math.max(0, Math.log10(i + 1 - steps[step - 1]) * 100)
						}}
					>
						<Clock size={50} />
					</div>
				{/each}
			{:else if step === steps.length}
				{#each { length: 400 }}
					{@const margin = 100}
					{@const size = getRandomNumber(300)}
					{@const left = getRandomNumber(innerWidth) - margin + 'px'}
					{@const top = getRandomNumber(innerHeight) - margin + 'px'}
					{@const red = getRandomNumber(255)}
					{@const green = getRandomNumber(255)}
					{@const blue = getRandomNumber(255)}
					<div class="clock-container random" style:left style:top>
						<Clock {size} --fill="rgb({red},{green},{blue})" />
					</div>
				{/each}
			{/if}
		</div>
	{/if}
{/if}

<svelte:window
	bind:innerWidth
	bind:innerHeight
	on:keyup={(e) => {
		if (e.key === 'Enter') {
			step++;
		}
	}}
/>

<style>
	.main-clock {
		padding: 3px;
		border-radius: 50%;
		overflow: hidden;
		background: linear-gradient(-45deg, black, #fff);
		box-shadow: 2px 2px 5px 0 #222;

		div {
			padding: 5px;
			background: white;
			border-radius: 50%;
		}
	}

	.multiple {
		position: absolute;
		inset: 0;

		display: flex;
		flex-wrap: wrap;
		align-content: baseline;
		overflow: hidden;

		.clock-container {
			height: max-content;
			border: 1px solid white;
			border-radius: 50%;

			&.random {
				position: absolute;
			}
		}
	}
</style>
