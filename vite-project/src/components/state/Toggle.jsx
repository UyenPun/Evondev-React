import React, { useState } from "react";

function Toggler() {
  const [on, setOn] = useState(false);
  console.log({ on }); // [false, function]

  return (
    <div
      className='toggle'
      onClick={() => setOn(true)}>
      Toggle {on ? "On" : "Off"}
    </div>
  );
}

export default Toggler;
