import React, { useState } from 'react';
import '../StyleSheet/Week4.css';

const Week4 = () => {
  const rows = 6;
  const cols = 7;
  const emptyGrid = Array(rows).fill(null).map(() => Array(cols).fill(null));
  const [grid, setGrid] = useState(emptyGrid);
  const [currentPlayer, setCurrentPlayer] = useState('Red');

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
        checkWinner(newGrid, currentPlayer);
        setCurrentPlayer(currentPlayer === 'Red' ? 'Yellow' : 'Red');
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
            alert(`${player} wins!`);
            setGrid(emptyGrid);
            return;
          }
        }
      }
    }
  };

  return (
    <div className="week4">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell cell-${rowIndex}-${colIndex}`}
                onClick={() => handleDrop(colIndex)}
                style={{ backgroundColor: cell || 'white' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Week4;
