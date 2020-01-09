/*
 * Objective: define a interface to create an object and everything is encapsulated.
 * Applicability: creating families of related objects, without specifying concrete classes or constructors.
 */

function carFactory(model) {
	class Wheel {
		constructor(size) {
			this.size = size;
		}

		build() {
			console.log(`Build a wheel with size ${this.size}`);
		}
	}

	class OffRoad {
		constructor() {
			this.model = 'OffRoad';
		}

		createWheel(size) {
			return new Wheel(size); 
		}
	}

	class RaceCar {
		constructor() {
			this.model = 'RaceCar';
		}

		createWheel(size) {
			return new Wheel(size);
		}
	}

	let car;
	switch (model) {
		case 'OffRoad':
			car = new OffRoad();
			break;
		case 'RaceCar':
			car = new RaceCar();
			break;
		default:
			car = new RaceCar();
			break;
	}
	
	if (car.printModel === undefined) {
		car.printModel = function () {
			console.log(`This car model is: ${car.model}`);
		}
	}

	return car;
}


function main() {
	const raceCar = new carFactory('RaceCar');
	const offRoad = new carFactory('OffRoad');

	raceCar.printModel();
	offRoad.printModel();

	raceCar.createWheel(12).build();
	offRoad.createWheel(23).build();
}

main();
