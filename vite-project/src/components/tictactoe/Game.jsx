// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

// component chính
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true); // x - true | o - false
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });

  const winner = calculateWinner(state.board);

  const handleCick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return; //  người win hoặc ô đã nhấn rồi -> ko được nhấn nữa
    boardCopy[index] = state.xIsNext ? "X" : "O"; // tại index bấm vào

    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext); // doi người đánh next ở moi lần bấm vào o dấy
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext, // doi người đánh next ở moi lần bấm vào o dấy
    });
  };

  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true);
    setState({
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };

  return (
    <div>
      <Board
        cells={state.board}
        onClick={handleCick}></Board>

      {winner && <div className='game-winner'>Winner is {winner}</div>}

      <button
        className='game-reset'
        onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
