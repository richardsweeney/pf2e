import Spell from './Spell';
import React from 'react';
import useSpells from '../hooks/useSpells';

function SpellGroup ({ level }) {
  const { getSpellTotals, getSpellsForLevel } = useSpells();
  const { numCasts, totalCasts } = getSpellTotals(level);
  const spells = getSpellsForLevel(level);

  return (
    <div key={level} className='mb-8 mt-4'>
      <h4 className='font-semibold text-xl mb-2'>
        Level {level} spells ({totalCasts - numCasts}/{totalCasts} remaining)
      </h4>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        {spells.map((spell, index) => (
          <Spell key={index} spell={spell}/>
        ))}
      </div>
    </div>
  );
}

export default SpellGroup;
