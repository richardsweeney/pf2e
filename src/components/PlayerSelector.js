import React, { useContext } from 'react';
import { store } from '../stores/PlayerContext';
import getPlayer from '../functions/player-functions';

function PlayerSelector () {
  const { data: players } = require('../data/players.json');
  const { dispatch } = useContext(store);

  return (
    <div className='grid grid-cols-2 gap-4'>
      {players.map(({ id, name }) => (
        <div key={id} className='mb-4 p-4'>
          <h2 className='font-semibold text-2xl'>{name}</h2>
          <button
            className='mt-2 font-semibold bg-blue-600 text-white py-2 px-4 rounded'
            onClick={() => dispatch({
              type: 'SET_PLAYER',
              payload: getPlayer(id)
            })}
          >
            Select player
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlayerSelector;
