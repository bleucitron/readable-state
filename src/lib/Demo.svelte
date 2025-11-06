<script lang="ts">
	import Clock from '$lib/Clock.svelte';
	import Digital from './Digital.svelte';

	let clockOn = $state(true);
	let digitalOn = $state(true);
</script>

<section>
	<div>
		<menu>
			<button
				class={{ on: clockOn }}
				onclick={() => {
					clockOn = !clockOn;
				}}>Analogique</button
			>
			<button
				class={{ on: digitalOn }}
				onclick={() => {
					digitalOn = !digitalOn;
				}}>Digitale</button
			>
		</menu>
		{#if clockOn}
			<Clock size={300} />
		{/if}
		{#if digitalOn}
			<Digital />
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100vw;
		height: 100vh;
	}

	menu {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		display: flex;
		justify-content: center;
		gap: 0.5rem;

		margin-block: 1rem;
		padding: 0;
	}

	button.on {
		color: grey;
	}
</style>
