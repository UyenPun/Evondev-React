import React from "react";
import styled from "styled-components";
const Card = (props) => {
  return (
    <div>
      <img
        src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=centerr'
        alt=''
      />

      <div>
        <div>
          {/* Right */}
          <div>
            <img
              src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center'
              alt=''
            />
            <span>@zndrson</span>
          </div>

          {/* Left */}
          <div>❤️ 256</div>
        </div>

        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
