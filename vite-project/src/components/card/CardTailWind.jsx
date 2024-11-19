import React from "react";

const CardTailWind = () => {
  return (
    <div className='relative'>
      <div className='w-full rounded-lg h-[400px]'>
        <img
          src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=centerr'
          alt=''
          className='block w-full h-full object-cover rounded-lg'
        />
      </div>

      <div className='absolute left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5  w-[calc(100%-36px)]'>
        <div className='flex justify-between items-center mb-8'>
          <div className='flex items-center gap-x-3'>
            <img
              src='https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center'
              alt=''
              className='w-8 h-8 rounded-full object-cover flex-shrink-0'
            />
            <span className='font-light text-base text-[#ffa400]'>
              @zndrson
            </span>
          </div>

          <div className='flex items-center gap-x-3'>
            <img
              src='./icon-heart.svg'
              alt='icon-heart'
            />
            256
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='font-medium text-lg'>Cosmic Perspective</div>
          <div className='text-lg font-bold text-transparent bg-clip-text bg-primary-gradient'>
            12,000 PSL
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTailWind;
