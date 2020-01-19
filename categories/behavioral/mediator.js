/*
 * Objective: encapsulates how a set of objects interact with each other.
 * Applicability: provide central authority over a group of objects, encapsulating
 * how those objects interact.
 */

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

class CommanderTower {
	constructor(...airplanes) {
		this._airplanes = airplanes;
	}

	register(airplane) {
		this._airplanes.push(airplane);
	}

	unregister(airplane) {
		const index = this._airplanes.indexOf(airplane);
		this._airplanes.splice(index, 1);
	}

	getCoordinates() {
		return this._airplanes.map(plane => {
			return {
				id: plane.id,
				coordinates: plane.coordinates
			};
		});
	}
}

class Airplane {
	constructor(latitude, longitude) {
		this.id = randomNumber(0, 10000);
		this.coordinates = {
			latitude,
			longitude
		};
	}
}


function main() {
	const airplanes = [new Airplane(-12, -34), new Airplane(20, 43)];

	const commanderTower = new CommanderTower(...airplanes);
	commanderTower.register(new Airplane(-2, 21));

	console.log(commanderTower.getCoordinates());
}

main();
