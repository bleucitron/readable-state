export function NOOP() {}

export function getRandomNumber(a: number, b = 0) {
	const n = Math.random();
	const min = Math.min(a, b);
	const range = Math.abs(a - b);

	return min + Math.floor(n * range);
}
