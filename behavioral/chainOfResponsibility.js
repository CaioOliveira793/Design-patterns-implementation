/*
 * Objective: avoid coupling the sender of a request to the recipient by giving more than
 * one object the chance to handle the request.
 * Applicability: satisfy a request without object coupling.
 */

class Calculator {
	constructor() {
		this.value = 0;
	}

	sum(number) {
		this.value += number;
		return this;
	}

	subtraction(number) {
		this.value -= number;
		return this;
	}
	
	multiplication(number) {
		this.value *= number;
		return this;
	}

	division(number) {
		this.value /= number;
		return this;
	}

	reset(number = 0) {
		this.value = number;
		return this;
	}

	return() {
		return this.value;
	}

	log() {
		console.log(this.value);
		return this;
	}
}


function main() {
	const calculator = new Calculator();

	const finalResult = calculator
		.reset(30)
		.division(2)
		.sum(500)
		.multiplication(0.5)
		.log()	// <- show partial result
		.reset(-50)
		.return();
	
	console.log(finalResult);
}

main();
