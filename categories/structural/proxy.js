/*
 * Objective: provide a surrogate or placeholder for another object to control access to it.
 * Applicability: when you need to interact with objects intelligently, protectively or remotely
 * without having to change them.
 */

class Api {
	users = {
		['1']: { name: 'Caio' },
		['2']: { name: 'JavaScript' },
		['3']: { name: 'C#' },
		['4']: { name: 'Dart' },
		['5']: { name: 'Lua' },
		['6']: { name: 'C++' },
	}

	getUser(id) {
		if (this.users[id]) return this.users[id];
		else return false;
	}
}

// apiProxy caches api "requests" to make querying faster
class ApiProxy {
	constructor() {
		this.api = new Api();
		this.cache = {}
	}

	getUser(id) {
		let user = this.cache[id];
		
		if (user) return user;

		user = this.api.getUser(id);
		
		if (user) this.cache[id] = user;
		
		return user;
	}

	cacheSize() {
		return Object.keys(this.cache).length;
	}
}


function main() {
	const apiProxy = new ApiProxy();

	console.log(apiProxy.getUser(6));
	console.log(apiProxy.getUser(390));
	console.log(apiProxy.getUser(5));
	console.log(apiProxy.getUser(2));
	console.log(apiProxy.getUser(4));
	console.log(apiProxy.getUser(40));
	console.log(apiProxy.getUser(1));
	console.log(apiProxy.getUser(2));
	console.log(apiProxy.getUser(2));

	console.log(apiProxy.cacheSize());
}

main();
