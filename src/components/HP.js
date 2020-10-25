import React from 'react';
import usePlayer from '../hooks/usePlayer';
import useHP from '../hooks/useHP';

function HP () {
  const { player } = usePlayer();
  const { HP, setHP } = useHP();
  if (!player) {
    return null;
  }

  return (
    <div>
      <input
        className='text-center h-20 w-20 text-gray-900 font-semibold bg-gray-100 border-l rounded-full bg-white flex items-center justify-center text-2xl cursor-pointer'
        type='number'
        value={HP}
        onChange={({ target }) => setHP(parseInt(target.value))}
      />
    </div>
  );
}

export default HP;
