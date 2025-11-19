<script lang="ts">
	import profile from '$lib/assets/profile.png';
</script>

<div>
	<img src={profile} alt="romain" />
</div>

<style>
	div {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		corner-shape: squircle;
		overflow: hidden;

		img {
			width: 100%;
		}
	}
</style>
