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
import { Board } from './board/board';

export default function Game() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    );
  }