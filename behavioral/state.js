/*
 * Objective: Allow an object to alter its behavior when its internal state changes.
 * Applicability: provides state-specific logic to a limited set of objects
 * in which each object represents a particular state.
 */

// state:
class ColorInfo {
	constructor(color, message) {
		this._message = message;
		this._color = color;
	}

	showMessage() {
		return this._message;
	}
}

class TrafficLight {
	constructor() {
		this.state = [
			new ColorInfo('green', 'GO'),
			new ColorInfo('yellow', 'STEADY'),
			new ColorInfo('red', 'STOP')
		];
		this.currentState = 0;
	}

	// change the internal state:
	next() {
		if (this.currentState + 1 === this.state.length)
			this.currentState = 0;
		else
			this.currentState++;
	}

	sign() {
		console.log(this.state[this.currentState].showMessage());
	}
}


function main() {
	const trafficLight = new TrafficLight();

	trafficLight.sign();
	trafficLight.next();

	trafficLight.sign();
	trafficLight.next();

	trafficLight.sign();
	trafficLight.next();

	trafficLight.sign();
	trafficLight.next();
}

main();
