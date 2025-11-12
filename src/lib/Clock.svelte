<script lang="ts">
	// import { now } from './now.svelte';
	import { now } from './now.store';

	interface Props {
		size?: number;
	}

	const OFFSET_ANGLE = 90;
	const DEG_TO_RAD = Math.PI / 180;
	const SCALE = 0.8;
	const MAX_ANGLE = 360;
	const MAX_HOURS = 12;
	const MAX_MINUTES = 60;
	const MAX_SECONDS = 60;

	function localTransform(coord: number) {
		return radius - coord * radius * SCALE;
	}

	function angleToCoords(angle: number) {
		const _angle = angle % MAX_ANGLE;

		return {
			x: localTransform(Math.cos(_angle * DEG_TO_RAD)),
			y: localTransform(Math.sin(_angle * DEG_TO_RAD))
		};
	}

	const { size = 100 }: Props = $props();

	// const hours = $derived(now.value.getHours());
	// const minutes = $derived(now.value.getMinutes());
	// const seconds = $derived(now.value.getSeconds());

	const hours = $derived($now.getHours());
	const minutes = $derived($now.getMinutes());
	const seconds = $derived($now.getSeconds());

	const radius = $derived(size / 2);
	const origin = $derived(`${radius}px ${radius}px`);

	const angle_hours = $derived(
		OFFSET_ANGLE + ((hours + minutes / MAX_MINUTES + seconds / MAX_SECONDS) * MAX_ANGLE) / MAX_HOURS
	);
	const angle_minutes = $derived(
		OFFSET_ANGLE + ((minutes + seconds / MAX_SECONDS) * MAX_ANGLE) / MAX_MINUTES
	);
	const angle_seconds = $derived(OFFSET_ANGLE + (seconds * MAX_ANGLE) / MAX_SECONDS);

	const { x: x_hours, y: y_hours } = $derived(angleToCoords(angle_hours));
	const { x: x_minutes, y: y_minutes } = $derived(angleToCoords(angle_minutes));
	const { x: x_seconds, y: y_seconds } = $derived(angleToCoords(angle_seconds));
</script>

<!-- <div class="Clock"> -->
<svg width="{size}px" height="{size}px">
	<circle width={size} height={size} cx={radius} cy={radius} r={radius} />
	<line
		class="hours"
		x1={x_hours}
		y1={y_hours}
		x2={radius}
		y2={radius}
		style:transform-origin={origin}
	/>
	<line
		class="minutes"
		x1={x_minutes}
		y1={y_minutes}
		x2={radius}
		y2={radius}
		style:transform-origin={origin}
	/>
	<line
		class="seconds"
		x1={x_seconds}
		y1={y_seconds}
		x2={radius}
		y2={radius}
		style:transform-origin={origin}
	/>
</svg>

<!-- </div> -->

<style>
	svg {
		display: block;
		margin: auto;

		circle {
			fill: darkslategrey;
		}

		line {
			stroke: white;
			stroke-width: 5px;
			stroke-linecap: round;
		}

		.hours {
			transform: scale(0.6);
		}
		.minutes {
			transform: scale(0.8);
		}
		.seconds {
			stroke-width: 2px;
			transform: scale(0.9);
		}
	}
</style>
