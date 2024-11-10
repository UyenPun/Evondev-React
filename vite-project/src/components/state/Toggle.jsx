import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggler() {
  const [on, setOn] = useState(false);
  console.log({ on }); // [false, function]

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      <div className='toggle-control'>
        <div
          className='toggle-on'
          onClick={() => {
            setOn(true);
          }}>
          On
        </div>
        <div
          className='toggle-off'
          onClick={() => {
            setOn(false);
          }}>
          Off
        </div>
      </div>
    </div>
  );
}

export default Toggler;
