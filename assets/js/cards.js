class Cards {
	constructor() {
		this.positionDicas = document.getElementById("dicas");
		this.cardEsq = document.querySelector(".card__esq");
		this.cardDir = document.querySelector(".card__dir");
	}

	scrollCards() {
		window.requestAnimationFrame(this.calculoScroll.bind(this));
	}
	calculoScroll() {
		const position = this.positionDicas.getBoundingClientRect()["y"];
		if (position >= 30) {
			this.cardEsq.style.transform = `translate(${(position - 30) / 10}%)`;
			this.cardDir.style.transform = `translate(${(-position + 30) / 10}%)`;
		}
	}
}

export { Cards };
