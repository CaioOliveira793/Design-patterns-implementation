/*
 * Objective: define a one-to-many dependency between objects.
 * Applicability: when you need many objects to recive an update when another object changes.
 */

class KeyboardSubject {
	static _observers = [];

	static subscribe(observer) {
		this._observers.push(observer);
		console.log(`observer subscribed`);
	}

	static unsubscribe(observer) {
		const observerIndex = this._observers.indexOf(observer);
		this._observers.splice(observerIndex, 1);
		console.log(`observer ${observerIndex} unsubscribed\n`);
	}

	static notifyObservers(currentState) {
		this._observers.forEach((observer, index) => {
			// depending on what observer is, you can call a method or execute it
			console.log(`observer ${index}`);
			observer(currentState);
		});
	}

	static clickLeft() {
		this.notifyObservers({ key: "ArrowLeft" });
	}

	static clickRight() {
		this.notifyObservers({ key: "ArrowRight" });
	}

	static clickUp() {
		this.notifyObservers({ key: "ArrowUp" });
	}

	static clickDown() {
		this.notifyObservers({ key: "ArrowDown" });
	}
}

class PlayerObserver {
	constructor() {
		this.position = 0;

		this.keys = {
			ArrowRight: this.goForward,
			ArrowLeft: this.goForward
		}
	}
	
	// use arrow functions to bind this to the object
	goForward = () => {
		this.position += 2;
		console.log(`position: ${this.position}\n`);
	}

	goBack = () => {
		this.position -= 2;
		console.log(`position: ${this.position}\n`);
	}

	updatePosition = (state) => {
		const move = this.keys[state.key];

		if (move) move();
		else console.log("nothing to do\n");
	}
}


function main() {
	const player1 = new PlayerObserver();
	const player2 = new PlayerObserver();

	KeyboardSubject.subscribe(player1.updatePosition);

	KeyboardSubject.clickDown();
	KeyboardSubject.clickRight();

	KeyboardSubject.subscribe(player2.updatePosition);

	KeyboardSubject.clickLeft();

	KeyboardSubject.unsubscribe(player1.updatePosition);
	
	KeyboardSubject.clickLeft();
}

main();
