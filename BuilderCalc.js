
function validation(num) {
	if (typeof num === "string" || typeof num === "undefined") {
		throw new Error("Only numbers are allowed.");
	}
}

class Calculator {
	constructor(props) {
		this.result = 0;
	}

	add(num) {
		validation(num);
		this.result = this.result + num;
		return this;
	}

	subtract(num) {
		validation(num);
		this.result = this.result - num;
		return this;
	}

	divide(num) {
		validation(num);
		this.result = this.result / num;
		return this;
	}

	multiply(num) {
		validation(num);
		this.result = this.result * num;
		return this;
	}

	compute() {
		return this.result;
	}
}

const calc = new Calculator();
const res = calc.add(5).multiply(3).subtract(0).compute();

console.log(res);
