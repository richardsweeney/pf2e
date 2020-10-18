import React from 'react';

function Dice ({ moves = 1 }) {
  const numMoves = [...Array(moves)].fill('dice');
  const size = 12;

  return (
    <div className='flex ml-1'>
      {numMoves.map((item, index) => (
        <span
          style={{
            width: size,
            height: size,
            display: 'block',
            transform: 'rotate(45deg)',
            marginRight: '7px',
            marginTop: '6px'
          }}
          className='bg-gray-600'
          key={index}
        />
      ))}
    </div>
  );
}

export default Dice;
