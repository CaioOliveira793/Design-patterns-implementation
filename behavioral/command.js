/*
 * Objective: encapsulate actions or operations as objects.
 * Applicability: separate the objects that request an operation or invoke a method
 * from the ones that execute.
 */

class Car {
	constructor() {
		this.velocity = 0;
	}

	accelerate() {
		this.velocity += 5;
	}

	brake() {
		this.velocity -= 5;
	}
}

class Command {
	constructor(subject) {
		this._subject = subject;
		this.commands = [];
	}

	execute(command, ...params) {
		this.commands.push(command);
		return this._subject[command](...params);
	}

	getSubject() {
		return this._subject;
	}
}


function main() {
	const commander = new Command(new Car());

	commander.execute('accelerate');
	commander.execute('accelerate');
	commander.execute('brake');

	console.log(commander.getSubject());
	console.log(commander.commands);
}

main();
