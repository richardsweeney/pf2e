import React from 'react';
import SpellGroup from './SpellGroup';
import usePlayer from '../hooks/usePlayer';

function SpellsTab () {
  const player = usePlayer();

  return (
    <div className='p-2'>
      <h3 className='font-semibold text-3xl mb-4'>Spells</h3>
      {player.spellLevels.map(level => (
        <SpellGroup
          key={level}
          level={level}
        />
      ))}
    </div>
  );
}

export default SpellsTab;
