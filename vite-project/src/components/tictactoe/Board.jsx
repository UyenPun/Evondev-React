import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helper";

// create table gom 9 o
const Board = () => {
  // Array(9).fill() -> [] => tạo ra 9 cái y nhau
  const cells = [null, null, null, "X", "X", "X", null, null];
  console.log(calculateWinner(cells));

  const array = [];
  return (
    <div className='game-board'>
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
