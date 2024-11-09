import React, { useState } from "react";

function Toggler() {
  const [on, setOn] = useState(false);
  console.log({ on, setOn }); // [false, function]

  return <div className='toggle'></div>;
}

export default Toggler;
