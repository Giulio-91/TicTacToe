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
import { Square } from '../square/square';

export function Board() {
    
    const [xIsNext, setXIsNext] = useState(true); // Each time a player moves, xIsNext (a boolean) will be flipped to determine which player goes next and the game’s state will be saved
    const [squares, setSquares] = useState(Array(9).fill(null));
    
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
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
        if (squares[idx] || winner) {
            return; // square already clicked => do nothing
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[idx] = "X";
        } else {
            nextSquares[idx] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }


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
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log(squares[a], ' WIN!');
            return squares[a];
          }
        }
        return null;
      }

    
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    );
}