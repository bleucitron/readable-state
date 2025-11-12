class Now {
	#value = $state(new Date());

	constructor() {
		setInterval(() => {
			this.#value = new Date();
		}, 1000);
	}

	get value() {
		return this.#value;
	}
}

export const now = new Now();
