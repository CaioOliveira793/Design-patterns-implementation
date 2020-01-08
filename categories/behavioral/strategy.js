/*
 * Objective: define a family of algorithms, encapsulate and make them interchangeable.
 * Applicability: when you need to use several algorithms which have different variations.
 */

class Animal {
	constructor() {
		this.fly = null;
	}

	setFlyStrategy(flyStrategy) {
		this.fly = flyStrategy;
	}
}

// Fly will be a object that overwrite the fly property.
class canNotFly {
	tryToFly() {
		console.log('I can not fly');
	}

	// other methods ...
}
 
class canFly {
	tryToFly() {
		console.log('Yeah, I am flying');
	}

	// other methods ...
}

// in this case, fly is a function that overwrite the fly property.
function canNotFlyFunction() {
	console.log('I can not fly');
}

function canFlyFunction() {
	console.log('Yeah, I am flying');
}


function overwritingObjects() {
	const dog = new Animal();
	const bird = new Animal();

	dog.setFlyStrategy(new canNotFly());
	dog.fly.tryToFly();

	bird.setFlyStrategy(new canFly());
	bird.fly.tryToFly();
}

function overwritingFunctions() {
	const dog = new Animal();
	const bird = new Animal();

	dog.setFlyStrategy(canNotFlyFunction);
	dog.fly();

	bird.setFlyStrategy(canFlyFunction);
	bird.fly();
}


// same result:
overwritingObjects();
overwritingFunctions();
