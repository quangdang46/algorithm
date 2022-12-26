function solveEightQueens(board, row) {
//check row=8
  if (row === 8) {
    return true;
  }

  for (let col = 0; col < 8; col++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1;

      if (solveEightQueens(board, row + 1)) {
        return true;
      }

      board[row][col] = 0;
    }
  }

  return false;
}

function isSafe(board, row, col) {
  for (let i = 0; i < 8; i++) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false;
    }
  }
  for (let i = row, j = col; i >= 0 && j < 8; i--, j++) {
    if (board[i][j] === 1) {
      return false;
    }
  }
  return true;
}

// Initialize the board to an empty 8x8 grid
const board = [[0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0]];

if (solveEightQueens(board, 0)) {
  console.log("Solution found:", board);
} else {
  console.log("No solution found.");
}
