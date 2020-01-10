/*
 * Objective: attach additional responsibilities dynamically to an object, extending its functionality.
 * Applicability: when you need the capabilities of inheritance with subclasses, but the functionalities
 * must be added at runtime.
 */

class Car {
	constructor(price, velocityMax) {
		this.price = price;
		this.velocityMax = velocityMax;
		this.currentVelocity = 0;
		this.deltaVelocity = 10;
	}

	accelerate() {
		this.currentVelocity = this.currentVelocity += this.deltaVelocity;
		return this.currentVelocity;
	}
}

function AirConditioner(car) {
	const newCar = Object.create(car);
	newCar.price = car.price + 60;
	newCar.airConditioner = {
		changeTemperature: (temperature) => `temperature changed to ${temperature} °C`
	}

	return newCar;
}

function Turbo(car) {
	const newCar = Object.create(car);

	newCar.price = car.price + 100;
	newCar.velocityMax = car.velocityMax + 30;
	newCar.deltaVelocity = car.deltaVelocity + 20;

	return newCar;
}


function main() {
	const myCar = new Car(1000, 200);
	const otherCar = new Car(3000, 180);

	const raceCar = new Turbo(myCar);
	console.log(raceCar);
	console.log(raceCar.accelerate());

	const rallyCar = new Turbo(new AirConditioner(otherCar));
	console.log(rallyCar);
	console.log(rallyCar.accelerate());
}

main();
