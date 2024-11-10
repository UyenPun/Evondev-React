import React, { useState } from "react";
import "./CountStyle.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  // sau time moi hien so click
  const hanleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };

  console.log({ count });

  return <div onClick={hanleIncrement}>Increament: {count}</div>;
};

export default Counter;
