import React from 'react';
import usePlayer from '../hooks/usePlayer';
import Spell from './Spell';
import useSpells from '../hooks/useSpells';

function CatripsTab () {
  const { player } = usePlayer();
  const { getCantripTotals } = useSpells();
  const { numCasts, totalCasts } = getCantripTotals();

  return (
    <div className='p-2'>
      <h3 className='font-semibold text-3xl mb-4'>Cantrips</h3>
      <div className='mb-8 mt-4'>
        <h4 className='font-semibold text-xl mb-2'>
          ({totalCasts - numCasts}/{totalCasts} remaining)
        </h4>
        <div className='md:grid md:grid-cols-2 md:gap-4'>
          {player.cantrips.map((spell, index) => (
            <Spell key={index} spell={spell} isCantrip />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatripsTab;
