import React, { useState, useEffect } from 'react';
import '../StyleSheet/Week2.css';
import ticTacToeImage from '../red devils.png';

const Week2 = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [tally, setTally] = useState({ X: 0, O: 0 });

  useEffect(() => {
    const calculateWinner = () => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return board[a];
        }
      }
      if (board.every(square => square !== null)) {
        return 'draw';
      }
      return null;
    };

    const result = calculateWinner();
    if (result && result !== 'draw') {
      setWinner(result);
      setTally(prevTally => ({ ...prevTally, [result]: prevTally[result] + 1 }));
    } else if (result === 'draw') {
      setWinner('draw');
    }
  }, [board]);

  const handleClick = (index) => {
    if (!winner && board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const handleScoreReset = () => {
    setTally({ X: 0, O: 0 });
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)} disabled={winner !== null || board[index] !== null}>
        {board[index]}
      </button>
    );
  };

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
