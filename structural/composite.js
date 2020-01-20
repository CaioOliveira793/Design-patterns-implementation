/*
 * Objective: Compose objects in tree structures to represent whole part hierarchies.
 * Applicability: Treat individual objects and object compositions uniformly.
 */

class Item {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	add(newItem) {
		this.children.push(newItem);
	}

	remove(item) {
		this.children.filter((child) => !(child === item));
	}

	hasChild(item) {
		if (this.children.findIndex(item) === -1) return false;
		else return true;
	}

	show() {
		console.log(`${this.name} {`);

		this.children.forEach((child) => {
			child.show();
		});
		console.log('}');
	}
}


function main() {
	const bag = new Item('bag');
	const wallet = new Item('wallet');
	const notebook = new Item('notebook');
	const creditCard = new Item('creditCard');
	const money = new Item('money');

	wallet.add(creditCard);
	wallet.add(money);

	bag.add(notebook);
	bag.add(wallet);

	bag.show();
}

main();
