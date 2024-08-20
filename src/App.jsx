/**
* 
* All the state management is handled by the Board component!

* 
* Notice the new () => syntax. 
* Here, () => handleClick(0) is an arrow function, which is a shorter way to define functions. 
* When the square is clicked, the code after the => “arrow” will run, calling handleClick().
* DO NOT USE "onSquareClick={handleClick(0)}"
*/

import { useState } from 'react';

// COMPONENTS
import { Board } from './board/Board.js';
import { Start } from './start/start';

export default function Game() {
  // CONSTANTS
  const [gameStarted, setGameStarted] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]); // array with the current squares state (null, 'X' or 'O')
  const [currentMove, setCurrentMove] = useState(0); // keep track of which step the user is currently viewing
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  // list of move
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      // REMEMBER TO SET THE KEY!!!
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  /**
   * When a player click on a square,
   * the history array is update adding the current situation
   * and the currentMove is update with the index of the current move
   * 
   * @param {*} nextSquares 
   */
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    console.log('History: ', history);
    console.log('Current move: ', currentMove);
  }

  /**
   * go to previous move
   * @param {*} nextMove
   */
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  if (gameStarted) {
    return (
      <div className="game">
        <div className="board-container">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="game">
        <div className='title'>TicTacToe</div>
        <Start onStartClick={() => setGameStarted(true)} />
      </div>
    );
  }
}
