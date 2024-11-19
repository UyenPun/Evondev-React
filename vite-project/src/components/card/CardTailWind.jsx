import React from "react";

const CardTailWind = () => {
  return (
    <div className='relative'>
      <div className='w-full rounded-lg h-[400px]'>
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
    </div>
  );
};

export default CardTailWind;
