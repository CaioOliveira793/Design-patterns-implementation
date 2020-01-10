/*
 * Objective: make existing classes work with others without modifying their source code.
 * Applicability: allow two incompatible interfaces to work together.
 */

// Adaptee:
const api = {
	itens: {
		[1]: { price: 50 },
		[2]: { price: 12 },
		[3]: { price: 23 },
		[4]: { price: 500 }
	},
	request(id) {
		if (this.itens[id]) return { body: { item: this.itens[id] } };
	}
}

// Adapter:
class SaleItem {
	static serch(id) {
		// this method can be a shopping cart adapter for the API, handling the requests that are made
		const response = api.request(id);

		if (response) return response.body.item;
		else return false;
	}
}

// Client:
class shoppingCart {
	constructor() {
		this.itens = {};
	}

	addItem(id) {
		const item = SaleItem.serch(id);
		if (item) {
			this.itens[id] = item;
			return item;
		} else return false;
	}
}


function main() {
	const myCart = new shoppingCart();

	console.log(myCart.addItem(2));		// { price: 12 }
	console.log(myCart.addItem(-3));	// false
	console.log(myCart.addItem(4));		// { price: 500 }
	console.log(myCart.addItem(1));		// { price: 50 }
	console.log(myCart.itens);			// { '1': { price: 50 }, '2': { price: 12 }, '4': { price: 500 } }
}

main();
