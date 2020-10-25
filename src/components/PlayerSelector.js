import React from 'react';
import Button from './Button';
import usePlayer from '../hooks/usePlayer';

function PlayerSelector () {
  const { data: players } = require('../data/players.json');
  const { setPlayer } = usePlayer();

  return (
    <div className='p-4'>
      <h1 className='font-semibold text-3xl mb-4'>Select Player</h1>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        {players.map(({ id, name, level, image }) => (
          <div key={id} className='rounded shadow bg-gray-100 p-4 flex justify-between items-center'>
            <div className='pr-2'>
              {image && (
                <img className='h-20 w-20 rounded-full object-fill' src={image} alt={name}/>
              )}
            </div>
            <div className='text-right'>
              <h2 className='font-semibold text-2xl'>{name} - level {level}</h2>
              <Button
                className='mt-2'
                onClick={() => setPlayer(id)}
                text='Select player'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerSelector;
