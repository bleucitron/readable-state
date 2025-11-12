let now = $state(new Date());

export function getNow() {
	return now;
}

setInterval(() => {
	now = new Date();
}, 1000);
