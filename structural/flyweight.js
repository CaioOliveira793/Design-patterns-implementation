/*
 * Objective: conserve memory by sharing a large number of refined objects efficiently.
 * Applicability: when you need to create a large number of similar objects.
 */

class Book {
	constructor(name, author, pageNumbers) {
		this.name = name;
		this.author = author;
		this.pageNumbers = pageNumbers;
	}

	// all the methods defined outside the constructor are shared through the objects by default.
	read() {
		console.log('reading the book');
	}
}


function main() {
	const book1 = new Book('book1', 'author1', 300);
	const book2 = new Book('book2', 'author2', 142);

	// the shared methods of books instance:
	console.log(Object.getOwnPropertyNames(Book.prototype));
	
	console.log(book1.read === book2.read);
}

main();
