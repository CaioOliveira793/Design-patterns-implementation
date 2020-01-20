/*
 * Objective: add methods to different classes without changing much those classes.
 * Applicability: make completely different methods depending on the class used.
 */

class Car {
	constructor(speed, weight) {
		this.speed = speed;
		this.weight = weight;
	}

	increaseSpeed(deltaSpeed) {
		this.speed += deltaSpeed;
	}

	decreaseSpeed(deltaSpeed) {
		this.speed -= deltaSpeed;
	}

	increaseWeight(deltaWeight) {
		this.weight += deltaWeight;
	}

	decreaseWeight(deltaWeight) {
		this.weight -= deltaWeight;
	}

	showProperties() {
		console.log(`car with ${this.speed} of speed and ${this.weight} Kg`)
	}

	accept(visitor) {
		visitor.visit(this);
	}
}

// visitors:

class UpgradeEngine {
	visit(car) {
		car.increaseSpeed(30);
		car.increaseWeight(400);
	}
}

class UpgradeBody {
	visit(car) {
		car.decreaseWeight(1000);
	}
}


function main() {
	const myCar = new Car(150, 3000);

	myCar.showProperties();

	myCar.accept(new UpgradeEngine());
	myCar.accept(new UpgradeBody());

	myCar.showProperties();
}

main();
