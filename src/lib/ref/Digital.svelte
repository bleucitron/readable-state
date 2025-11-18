<script lang="ts">
	import { now } from './now.svelte';
	import { onVisible } from './onVisible';

	let _now = $state(new Date());
</script>

<p
	{@attach onVisible(() => {
		return now.subscribe((v) => {
			if (v) {
				_now = v;
			}
		});
	})}
>
	{_now.toLocaleTimeString('fr')}
</p>

<style>
	p {
		font-family:
			Commit Mono,
			monospace;
		text-align: center;
		font-size: var(--size, 3rem);
	}
</style>
