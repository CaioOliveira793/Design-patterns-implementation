/*
 * Objective: lets subclasses redefine certain steps of an algorithm without changing
 * the algorithm's structure.
 * Applicability: define the skeleton of the algorithm or implementation of an operation.
 */

class GameEngine {
	constructor() {
		if (this.play !== GameEngine.prototype.play) {
			console.error('GameEngine: play function can not be override');
			return new Error('GameEngine: play function can not be override');
		}
	}

	initialize() {};
	startPlay() {};
	endPlay() {};

	play() {
		this.init();
		this.startGame();
		this.finishGame();
	}
}

class TicTacToeGame extends GameEngine {
	constructor() {
		super();
	}

	init() {
		console.log('create board');
	}

	startGame() {
		console.log('set the first player');
	}

	finishGame() {
		console.log('clear the board and start again');
	}
}

class ChessGame extends GameEngine {
	constructor() {
		super();
	}

	init() {
		console.log('set the pieces on the board');
	}

	startGame() {
		console.log('set the first player');
	}

	finishGame() {
		console.log('show the game statistics');
	}
}


function main() {
	const chess = new ChessGame();
	const ticTacToe = new TicTacToeGame();

	console.log('chess game:');
	chess.play();

	console.log('\ntic tac toe game:');
	ticTacToe.play();
}

main();
