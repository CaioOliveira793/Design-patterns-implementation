/*
 * Objective: access the elements of an aggregate object without exposing its underlying representation.
 * Applicability: allows clients to loop over a collection of objects.
 */

class MyIterator {
	constructor(items) {
		this.index = 0;
		this.items = items;
	}

	getItem(index) {
		return this.items[index];
	}

	foreach(callback) {
		for (let i = 0; i < this.items.length; i++) {
			callback(this.items[i], i);
		}
	}
}


function main() {
	const items = [1, 2, 3, 4, 5, 6, 7, 8];
	const it = new MyIterator(items);

	console.log(it.getItem(7));

	console.log('double');
	it.foreach(item => console.log(item *= 2));
}

main();
