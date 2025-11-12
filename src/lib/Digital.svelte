<script lang="ts">
	// import { now } from './now.svelte';
	import { now } from './now.store';
</script>

<!-- <p>{now.value.toLocaleTimeString('fr')}</p> -->
<p>{$now.toLocaleTimeString('fr')}</p>

<style>
	p {
		font-family: monospace;
		text-align: center;
		font-size: var(--size, 3rem);
	}
</style>
