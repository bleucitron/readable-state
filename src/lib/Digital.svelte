<script lang="ts">
	import { now } from './now.svelte';
</script>

<p>{now.value.toLocaleTimeString('fr')}</p>

<style>
	p {
		font-family: monospace;
		text-align: center;
		font-size: var(--size, 3rem);
	}
</style>
