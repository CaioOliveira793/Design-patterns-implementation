/*
 * Objective: define a interface to create an object, but let subclasses decide which class to instantiate.
 * Applicability: when object type needs to be decided at runtime (dynamic object creation)
 */

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

class Enemy {
	constructor(name, damage, gun) {
		this.name = name;
		this.damage = damage;
		this.gun = gun;
	}

	attack() {
		console.log(`${this.name} attacked you with ${this.gun} and make ${this.damage} of damage`);
	}
}

class Minion extends Enemy {
	constructor() {
		super('minion', 1, 'hand');
	}
}

class Fighter extends Enemy {
	constructor(name) {
		super(name, 5, 'knife');
	}
	// other methods ...
}

class Soldier extends Enemy {
	constructor(name) {
		super(name, 20, 'carbine');
	}
	// other methods ...
}

class Wolf extends Enemy {
	constructor(name) {
		super(name, 10, 'teeth');
	}
	// other methods ...
}

// can be a class or a function
function enemyFactory(type = 1, name) {
	// the way the object can be chosen doesn't matter
	switch (type) {
		case 2:
			return new Fighter(name);
		case 3:
			return new Wolf(name);
		case 4:
			return new Soldier(name);
		default:
			return new Minion();
	}
}


function main() {
	const enemy1 = enemyFactory(randomNumber(1, 4), 'enemy1');
	const enemy2 = enemyFactory(randomNumber(1, 4), 'enemy2');
	const enemy3 = enemyFactory(randomNumber(1, 4), 'enemy3');

	enemy1.attack();
	enemy2.attack();
	enemy3.attack();
}

main();
