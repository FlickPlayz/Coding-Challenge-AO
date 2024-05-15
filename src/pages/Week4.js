import React, { useState, useEffect } from 'react';
import '../StyleSheet/Week4.css';

const Week4 = () => {
  const rows = 6;
  const cols = 7;
  const emptyGrid = Array(rows).fill(null).map(() => Array(cols).fill(null));
  const [grid, setGrid] = useState(emptyGrid);
  const [currentPlayer, setCurrentPlayer] = useState('Red');
  const [isCpuEnabled, setIsCpuEnabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (currentPlayer === 'Yellow' && isCpuEnabled) {
      handleCpuMove();
    }
  }, [currentPlayer]);

  const handleCpuMove = () => {
    setTimeout(() => {
      const availableCols = [];
      for (let col = 0; col < cols; col++) {
        if (grid[0][col] === null) {
          availableCols.push(col);
        }
      }
      const randomCol = availableCols[Math.floor(Math.random() * availableCols.length)];
      handleDrop(randomCol);
    }, 3000); // 3-second delay
  };

  const handleDrop = (col) => {
    const newGrid = grid.map(row => row.slice());
    for (let row = rows - 1; row >= 0; row--) {
      if (!newGrid[row][col]) {
        newGrid[row][col] = currentPlayer;
        setGrid(newGrid);
        const cell = document.querySelector(`.cell-${row}-${col}`);
        cell.classList.add('dropping');
        setTimeout(() => {
          cell.classList.remove('dropping');
        }, 500);
        if (checkWinner(newGrid, currentPlayer)) {
          setTimeout(() => {
            alert(`${currentPlayer} wins!`);
            setGrid(emptyGrid);
          }, 100);
        } else {
          setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
        }
        return;
      }
    }
  };

  const checkDirection = (grid, player, row, col, deltaRow, deltaCol) => {
    let count = 0;
    let r = row;
    let c = col;
    while (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === player) {
      count++;
      r += deltaRow;
      c += deltaCol;
    }
    return count;
  };

  const checkWinner = (grid, player) => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (grid[row][col] === player) {
          if (
            checkDirection(grid, player, row, col, 0, 1) >= 4 || // horizontal
            checkDirection(grid, player, row, col, 1, 0) >= 4 || // vertical
            checkDirection(grid, player, row, col, 1, 1) >= 4 || // diagonal down-right
            checkDirection(grid, player, row, col, 1, -1) >= 4   // diagonal down-left
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const resetGame = () => {
    setGrid(emptyGrid);
    setCurrentPlayer('Red');
  };

  const startGame = (playAgainstCpu) => {
    setIsCpuEnabled(playAgainstCpu);
    setGameStarted(true);
    setShowOptions(false);
  };

  const showGameOptions = () => {
    setShowOptions(true);
    setGameStarted(false);
  };

  return (
    <div className="week4">
      <h1 className="title">Connect 4</h1>
      {!gameStarted ? (
        <div className="start-options">
          {showOptions ? (
            <>
              <button className="start-button" onClick={() => startGame(false)}>2 Player</button>
              <button className="start-button" onClick={() => startGame(true)}>Play Against CPU</button>
            </>
          ) : (
            <button className="back-button" onClick={showGameOptions}>Back</button>
          )}
        </div>
      ) : (
        <>
          <div className="grid">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`cell cell-${rowIndex}-${colIndex}`}
                    onClick={() => currentPlayer === 'Red' || !isCpuEnabled ? handleDrop(colIndex) : null}
                    style={{ backgroundColor: cell || 'white' }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="button-group">
            <button className="reset-button" onClick={resetGame}>Reset Game</button>
            <button className="back-button" onClick={showGameOptions}>Back</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Week4;
