import React from "react";
import styled from "styled-components";

/**
const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article...)``
CSS-in-JS
  **/

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=centerr'
          alt=''
        />
      </CardImage>

      <CardContent>
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
      </CardContent>
    </StyledCard>
  );
};

export default Card;
