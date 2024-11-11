import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helper";

// create table gom 9 o
const Board = (props) => {
  // console.log(props);

  // // Array(9).fill() -> [] => tạo ra 9 cái y nhau
  // const cells = [null, null, null, "X", "X", "X", null, null];
  // console.log(calculateWinner(cells));

  const array = [];
  return (
    <div className='game-board'>
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item} // gia tri truyen vao
          onClick={() => props.onClick(index)} //onClick thuoc ve prop cua componet cell
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}></Cell>
      ))}
    </div>
  );
};

export default Board;
