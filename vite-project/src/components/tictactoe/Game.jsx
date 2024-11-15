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

      const [board, xIsNext] = state;
      const [index, winner] = action.payload;
      if (winner || board[index]) return;

      const nextState = JSON.parse(JSON.stringify(state));
      return nextState;
    }

    default:
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

  const handleResetGame = () => {};

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
