//Chessboard exercise from Eloquent Javascript

// Chessboard

let board = '';
let size = 50;
for (i = 1; i <= size; i++) {
	let fila = '';
	for (j = 1; j <= size; j++) {
		if ((i + j) % 2 == 0) {
			fila += ' '
		} else {
			fila += '#'
		}
	}
	board += fila + '\n';
}

console.log(board)
