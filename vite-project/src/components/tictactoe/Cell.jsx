/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Cell = ({ value, onClick, className }) => {
  // Obj Detructuring:
  // const { value, onClick } = props;
  // console.log(value, onClick);
  // hoac:
  // const Cell = ({ value, onClick }) => {}

  return (
    <div
      className={`game-cell ${className}`}
      onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
