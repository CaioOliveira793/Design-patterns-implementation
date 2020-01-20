/*
 * Objective: ensure that a class has only one instance and provides an access point to it.
 * Applicability: when you want to eliminate the option of instantiating more than one object.
 */


// an object literal can be a singleton:
const SingletonLiteral = {
	properties: 'SingletonLiteral properties',
	methods() {
		return 'SingletonLiteral my methods'
	}
};

// or a static class:
class SingletonClass {
	static properties = 'SingletonClass porperties';

	static methods(){
		return 'SingletonClass methods';
	}
}

function main() {
	console.log(SingletonLiteral.properties);
	console.log(SingletonLiteral.methods());

	console.log(SingletonClass.properties);
	console.log(SingletonClass.methods());
}

main();
