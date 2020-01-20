/*
 * Objective: decouples an abstraction from its implementation so that the two can vary independently.
 * Applicability: when it is necessary to change abstractions and concrete classes independently.
 */

class Shape {
	constructor(format) {
		this._format = format;
	}

	getFormat() {
		return this._format;
	}
}

class Color {
	constructor(color) {
		this.color = color;
	}

	getColor() {
		return this.color;
	}
}

class Circle extends Shape {
	constructor(color) {
		super('Circle');
		this.color = color;
	}

	print() {
		return `${this.color.getColor()} ${this.getFormat()}`;
	}
}

class Rectangle extends Shape {
	constructor(color) {
		super('Rectangle');
		this.color = color;
	}

	print() {
		return `${this.color.getColor()} ${this.getFormat()}`;
	}
}

class White extends Color {
	constructor() {
		super('white');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}


function main() {
	const whiteCircle = new Circle(new White());
	const blueRectangle = new Rectangle(new Blue());

	console.log(whiteCircle.print());
	console.log(blueRectangle.print());
}

main();
