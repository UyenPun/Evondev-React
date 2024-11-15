/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable state
// [...arr] {...obj}
// deep copy JSON.parse(JSON.stringify(obj))
const gameReducer = (state, action) => {
  switch (
    action.type // do prop dispatch la type
  ) {
    case "CLICK": {
      // console.log(state, action.payload);
      // Trích xuất state và payload
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;

      // Kiểm tra điều kiện dừng
      if (winner || board[index]) return state;

      // Clone state và cập nhật giá trị
      const nextState = JSON.parse(JSON.stringify(state)); // clone state init
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }

    // Reset
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;

      return nextState;
    }

    default:
      console.log("ERROR");
      break;
  }
};

// component chính
const Game = () => {
  // useReducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);

  const handleCick = (index) => {
    dispatch({
      type: "CLICK",
      payload: { index, winner }, // payload: data sẽ trả về
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
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
