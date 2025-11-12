<script lang="ts">
	import { getNow } from './now.svelte';

	const now = $derived(getNow());
</script>

<p>{now.toLocaleTimeString('fr')}</p>

<style>
	p {
		font-family: monospace;
		text-align: center;
		font-size: var(--size, 3rem);
	}
</style>
