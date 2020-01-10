/*
 * Objective: create a simplified interface that performs many other methods behind the scenes.
 * Applicability: make a high level interface that is simple to use.
 */


class BankAccount {
	constructor(user, keyword) {
		this._user = user;
		this._keyword = keyword;
		this._balance = 0;
	}

	_login(user, key) {
		if (this._user === user && this._keyword === key) return true;
		else return false;
	}

	changeKeyword(user, oldKey, newKey) {
		if (this._login(user, oldKey)) {
			this._keyword = newKey;
			return true;
		} else
			return false;
	}

	deposit(user, keyword, value) {
		if (this._login(user, keyword)) {
			this._balance += value;
			return true;
		} else 
			return false;
	}

	withdrawal(user, keyword, value) {
		if (this._login(user, keyword)) {
			if (this._balance >= value) {
				this._balance -= value;
				return value;
			} else
				return 'unavailable balance';
		} else
			return 'unauthorized login';
	}
}


// the user does not need to know the implementation, just use the interface.
function main() {
	const password = 'myname_mybirthday_bank_:)';
	const myAccount = new BankAccount('myname', password);

	let result = myAccount.deposit('myname', password, 10000);
	console.log(result);

	result = myAccount.changeKeyword('myname', 'myname_mybirthday_bank');
	console.log(result);

	result = myAccount.withdrawal('myname', password, 1500);
	console.log(result);

	result = myAccount.withdrawal('myname', password, 100000);
	console.log(result);
}

main();
