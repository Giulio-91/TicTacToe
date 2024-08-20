/**
* 
* All the state management is handled by the Board component!

* 
* Notice the new () => syntax. 
* Here, () => handleClick(0) is an arrow function, which is a shorter way to define functions. 
* When the square is clicked, the code after the => “arrow” will run, calling handleClick().
* DO NOT USE "onSquareClick={handleClick(0)}"
*/

import { Square } from '../square/Square.js';
import './board.css';

// COMPONENTS

export function Board({ xIsNext, squares, onPlay }) {
  // CONSTANTS
  const winner = calculateWinner(squares);
  const nextPlayer = xIsNext ? 'Player 1' : 'Player 2';
  const currentPlayer = !xIsNext ? 'Player 1' : 'Player 2';
  let status =
    winner == null ? 'Next player: ' + nextPlayer : 'Winner: ' + currentPlayer;

  // GENERATE BOARD
  const boardRows = [];
  for (let i = 0; i < 3; i++) {
    // Ciclo per le righe
    const row = [];
    for (let j = 0; j < 3; j++) {
      // Ciclo per le colonne
      const index = i * 3 + j; // Calcola l'indice del quadrato corrente
      row.push(
        <Square
          key={index} // Chiave unica per ogni Square
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    boardRows.push(
      <div key={i} className="board-row">
        {row}
      </div>
    );
  }

  /**
   *
   * @param {*} idx
   * There are generally two approaches to changing data.
   * The first approach is to mutate the data by directly changing the data’s values.
   * The second approach is to replace the data with a new copy which has the desired changes.
   * Avoiding direct data mutation lets you keep previous versions of the data intact, and reuse them later.
   */
  function handleClick(idx) {
    if (squares[idx]) {
      // square already clicked => do nothing
      return;
    }
    if (winner) {
      // someone win
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  /**
   * Calculate if some player win
   * @param {*} squares
   * @returns
   */
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(squares[a], ' WIN!');
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <div className="status">{status}</div>
      {boardRows}
    </div>
  );
}
