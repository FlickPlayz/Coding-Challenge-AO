import React, { useState, useEffect } from 'react';
import '../StyleSheet/Week2.css';
import ticTacToeImage from '../red devils.png';

const Week2 = () => {
  // State variables
  const [board, setBoard] = useState(Array(9).fill(null)); // Represents the tic-tac-toe board
  const [currentPlayer, setCurrentPlayer] = useState('X'); // Represents the current player ('X' or 'O')
  const [winner, setWinner] = useState(null); // Represents the winner of the game ('X', 'O', or 'draw')
  const [tally, setTally] = useState({ X: 0, O: 0 }); // Represents the score tally for 'X' and 'O'

  // useEffect hook to calculate the winner and update the state variables accordingly
  useEffect(() => {
    const calculateWinner = () => {
      const lines = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6], // Diagonal from top-right to bottom-left
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a]; // Return the winner ('X' or 'O')
        }
      }
      if (board.every(square => square !== null)) {
        return 'draw'; // Return 'draw' if all squares are filled and there is no winner
      }
      return null; // Return null if there is no winner yet
    };

    const result = calculateWinner();
    if (result && result !== 'draw') {
      setWinner(result); // Set the winner
      setTally(prevTally => ({ ...prevTally, [result]: prevTally[result] + 1 })); // Update the score tally
    } else if (result === 'draw') {
      setWinner('draw'); // Set the winner as 'draw'
    }
  }, [board]);

  // Function to handle a square click
  const handleClick = (index) => {
    if (!winner && board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer; // Set the current player's symbol ('X' or 'O') in the clicked square
      setBoard(newBoard); // Update the board state
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Switch the current player
    }
  };

  // Function to handle game reset
  const handleReset = () => {
    setBoard(Array(9).fill(null)); // Reset the board
    setCurrentPlayer('X'); // Set the current player as 'X'
    setWinner(null); // Reset the winner
  };

  // Function to handle score reset
  const handleScoreReset = () => {
    setTally({ X: 0, O: 0 }); // Reset the score tally
  };

  // Function to render a square button
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)} disabled={winner !== null || board[index] !== null}>
        {board[index]} {/* Display the symbol ('X' or 'O') in the square */}
      </button>
    );
  };

  // UI Part
  return (
    <div className="week2-container">
      <h1 className="W2Header">Week 2</h1>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="status">
        {winner ? (winner === 'draw' ? "It's a draw" : `Winner: ${winner}`) : `Current Turn: ${currentPlayer}`}
      </div>
      <div className="tally">
        <p>Tally:</p>
        <p>X: {tally.X}</p>
        <p>O: {tally.O}</p>
      </div>
      <button className="reset-button" onClick={handleReset}>Reset Game</button>
      <button className="reset-button2" onClick={handleScoreReset}>Reset Scores</button>
      <img className= "redDevils" src={ticTacToeImage} alt="RedDevils" />
    </div>
  );
};

export default Week2;
