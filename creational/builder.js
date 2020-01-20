/*
 * Objective: create a composition of objects and encapsulate them in a single.
 * Applicability: when all objects are part of the same context, allowing
 * them to be encapsulated in another object.
 */

class Address {
	constructor() {
		this.street = 'Some street';
		this.number = 99;
	}
}

class DriversLicense {
	constructor() {
		this.number = 12345678;
		this.year = new Date(2068);
		this.validation = true;
	}
}

class Person {
	constructor(name) {
		this.name = name;
		this.address = new Address();
		this.driversLicense = new DriversLicense();
		this.birthday = new Date(2030, 1, 1);
	}
}


function main() {
	const goodGuy = new Person('Michael');
	console.log(goodGuy);

	// an object literal can also be constructed by composition
	const somebody = {
		name: 'no name',
		// address: new Address(),
		address: {
			street: 'Some street',
			number: 99
		},
		// driversLicense: new DriversLicense(),
		driversLicense: {
			number: 12345678,
			year: new Date(2068),
			validation: true
		},
		birthday: new Date(2030)
	}
	console.log(somebody);
}

main();
