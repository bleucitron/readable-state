<script lang="ts">
	import Clock from './Clock.svelte';
	import Digital from './Digital.svelte';

	let clockOn = $state(true);
	let digitalOn = $state(true);
</script>

<section>
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
	<div class="centered">
		<div>
			{#if clockOn}
				<Clock size={300} />
			{/if}
			{#if digitalOn}
				<Digital />
			{/if}
		</div>
	</div>
</section>

<style>
	section {
		height: 100%;

		padding: 1rem;
		background: white;
		border-radius: 0.5rem;
		box-shadow: 0 0 10px 0 grey;
	}

	menu {
		display: flex;
		justify-content: center;
		gap: 0.5rem;

		margin: 0;
		padding: 0;
	}

	.centered {
		height: 100%;
		width: unset;
	}

	button.on {
		color: grey;
	}
</style>
