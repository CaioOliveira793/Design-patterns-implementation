/*
 * Objective: define a grammatical representation for a language and provide an interpreter
 * to deal with this grammar.
 * Applicability: offers a scripting language that allows end-users to customize their solution.
 */

class TerminalExpression {
	constructor(expression) {
		this.expression = expression;
	}

	interpret(context) {
		return context.indexOf(this.expression) > -1;
	}
}

class OrExpression {
    constructor(terminalExpr1, terminalExpr2) {
        this.terminalExpr1 = terminalExpr1;
        this.terminalExpr2 = terminalExpr2;
    }

    interpret(context) {
        return this.terminalExpr1.interpret(context) || this.terminalExpr2.interpret(context);
    }
}

class AndExpression {
    constructor(terminalExpr1, terminalExpr2) {
        this.terminalExpr1 = terminalExpr1;
        this.terminalExpr2 = terminalExpr2;
    }

    interpret(context) {
        return this.terminalExpr1.interpret(context) && this.terminalExpr2.interpret(context);
    }
}

class Chat {
	static blockedExpressions = [];

	static addBlockedExpression(expression) {
		this.blockedExpressions.push(expression);
	}

	static checkMessage(message) {
		const results = this.blockedExpressions.map(blockedExpr => {
			return !blockedExpr.interpret(message);
		});

		const aprovedStatus = results.reduce((prev, curr) => {
			return prev && curr
		});

		return aprovedStatus;
	}
}

function main() {
	Chat.addBlockedExpression(new TerminalExpression('forbidden words'));
	Chat.addBlockedExpression(new TerminalExpression('span'));

	console.log(Chat.checkMessage('message that contains some forbidden words'));
	console.log(Chat.checkMessage('informative message'));
	console.log(Chat.checkMessage('Hello span span span span span span span span span span'));
}

main();
