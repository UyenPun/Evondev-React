import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

// component chính
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // x - true | o - false
  const winner = calculateWinner(board);

  const handleCick = () => {};

  return (
    <div>
      <Board
        cells={board}
        onClick={handleCick}></Board>
    </div>
  );
};

export default Game;
