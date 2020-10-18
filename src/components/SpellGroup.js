import Spell from './Spell';
import React from 'react';
import useSpells from '../hooks/useSpells';
import usePlayer from '../hooks/usePlayer';

function SpellGroup ({ level }) {
  const player = usePlayer();
  const { getSpellTotals } = useSpells();
  const { numCasts, totalCasts } = getSpellTotals(level);

  return (
    <div key={level} className='mb-8 mt-4'>
      <h4 className='font-semibold text-xl mb-2'>
        Level {level} spells ({totalCasts - numCasts} casts remaining)
      </h4>
      <div className='grid grid-cols-2 gap-4'>
        {player.spells
          .filter(spell => spell.level === level)
          .map((spell, index) => (
            <Spell key={index} spell={spell}/>
          ))
        }
      </div>
    </div>
  );
}

export default SpellGroup;
