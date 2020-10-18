import Property from './Property';
import React, { useState } from 'react';
import useSpells from '../hooks/useSpells';
import Dice from './Dice';

function SpellModal ({ spell, closeModal }) {
  const [hasCasted, setHasCasted] = useState(false);
  const { castSpell } = useSpells();
  const { getSpellTotals } = useSpells();
  const { numCasts, totalCasts } = getSpellTotals(spell.level);

  function isDisabled () {
    return numCasts === totalCasts;
  }

  const cast = () => {
    setHasCasted(true);
    castSpell(spell.level);
  };

  const properties = {
    'Targets': (spell.targets) ? spell.targets : 'n/a',
    'Prepared': (spell.prepared) ? 'Yes' : 'No'
  };

  return (
    <>
      <div className='flex justify-between align-text-top'>
        <h4 className='font-semibold text-2xl mb-4'>
          {spell.name} (Level {spell.level})
        </h4>
        <button
          onClick={closeModal}
        >close
        </button>
      </div>

      <div className='flex align-middle mb-2 mt-1'>
        <Dice moves={spell.moves}/>
        <span className='pl-2'>{spell.range && `${spell.range} ft.`}</span>
      </div>

      {Object.entries(properties).map(([label, value], index) => (
        <Property key={index} label={label} value={value}/>
      ))}

      <div className='flex justify-between align-middle mt-4 mb-4'>
        <button
          className='font-semibold bg-blue-600 text-white py-2 px-4 rounded'
          onClick={cast}
          disabled={isDisabled()}
        >Cast spell
        </button>
        <p className='mb-4'>({totalCasts - numCasts} level {spell.level} casts remaining)</p>
      </div>

      {hasCasted ? (
        <p className='mt-2 mb-4 font-semibold bg-gray-100 p-2 shadow rounded-r-md border-l-4 border-orange-500'>
          You casted {spell.name} ✨ ✨
        </p>
      ) : null}

      <p className='mb-2'><strong>Notes</strong></p>
      <div dangerouslySetInnerHTML={{ __html: spell.notes }}/>
    </>
  );
}

export default SpellModal;
