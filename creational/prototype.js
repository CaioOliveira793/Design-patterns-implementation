/*
 * Objective: create objects that can be used as blueprints for any object created by constructor.
 * Applicability: when an object needs to inherit another, having a "is a" binding.
 */

class Animal {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}

	eat() {
		console.log(`${this.name} is eating`);
	}
}

// "extends" keyword allows prototype inheritance
// with that, any object maded by Dog can call the methods and properties inside Animal
class Dog extends Animal {
	constructor(name, weight) {
		super(name, weight);
		this.paws = 4;
	}

	// inside a class, all the methods is inside a prototype by default
	// inside a function the same behavior doesn't occur
	walk() {
		console.log(`${this.name} is walking`);
	}

	bite() {
		console.log(`${this.name} is biting`);
	}
}


function main() {
	const dog = new Dog('Rick', 20);
	console.log(dog.name);
	dog.eat();
	dog.bite();

	// show the prototype of object dog: (Animal)
	console.log(Object.getPrototypeOf(Dog));
}

main();
