import React from "react";
import styled, { css } from "styled-components";

/**
const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article...)``
CSS-in-JS
  **/
const StyledCard = styled.div`
  position: relative;

  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
    bottom: 0;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 100rem;
      object-fit: cover;
      flex-shrink: 0;
    }
  }

  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: #333;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }

  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: black;
  }

  .card-amount {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;

    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
      `};

    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary}>
      <div className='card-image'>
        <img
          src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=centerr'
          alt=''
        />
      </div>

      <div className='card-content'>
        <div className='card-top'>
          <div className='card-user'>
            <img
              src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center'
              alt=''
            />
            <span className='user-name'>@zndrson</span>
          </div>

          <div className='card-meta'>
            <img
              src='./icon-heart.svg'
              alt='icon-heart'
            />
            256
          </div>
        </div>

        <div className='card-footer'>
          <div className='card-title'>Cosmic Perspective</div>
          {/* <CardCAmount>12,000 PSL</CardCAmount> */}
          <div
            className='card-amount'
            fontSize='20px'>
            12,000 PSL
          </div>
          {/* <CardCAmount secondary>12,000 PSL</CardCAmount> */}
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
