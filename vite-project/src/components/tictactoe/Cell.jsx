import React from "react";

const Cell = ({ value, onClick }) => {
  // Obj Detructuring:
  // const { value, onClick } = props;
  // console.log(value, onClick);
  // hoac:
  // const Cell = ({ value, onClick }) => {}

  return (
    <div
      className='game-cell'
      onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
