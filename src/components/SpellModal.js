import Property from './Property';
import React, { useState } from 'react';
import useSpells from '../hooks/useSpells';
import Dice from './Dice';
import Button from './Button';

function SpellModal ({ spell, closeModal }) {
  const [hasCasted, setHasCasted] = useState(false);
  const { castSpell, undoCast } = useSpells();
  const { getSpellTotals } = useSpells();
  const { numCasts, totalCasts } = getSpellTotals(spell.level);
  const keys = ['area', 'targets', 'duration', 'prepared', 'range'];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function isDisabled () {
    return numCasts === totalCasts;
  }

  const cast = () => {
    setHasCasted(true);
    castSpell(spell.level);
  };

  const undo = () => {
    setHasCasted(false);
    undoCast(spell.level);
  }

  return (
    <>
      <div className='flex justify-between items-start mb-4'>
        <h4 className='font-semibold text-2xl'>
          {spell.name} (Level {spell.level})
        </h4>
        <Button
          onClick={closeModal}
          text={'Close'}
        />
      </div>

      <div className='flex align-middle mb-4 mt-1'>
        <Dice moves={spell.moves}/>
      </div>

      {keys.map((key, i) => {
        if (spell[key]) {
          return (
            <Property key={i} label={capitalizeFirstLetter(key)} value={spell[key]} />
          );
        }

        return null;
      })}

      <div className='flex justify-between align-middle mt-6 mb-6'>
        <Button
          onClick={cast}
          disabled={isDisabled()}
          text="Cast spell"
        />
        <p className='mb-4'>({totalCasts - numCasts} level {spell.level} casts remaining)</p>
      </div>

      {hasCasted ? (
        <p className='mt-2 mb-4 flex justify-between items-center font-semibold bg-gray-100 p-2 shadow rounded-r-md border-l-8 border-green-700'>
          <span>You casted {spell.name} ✨ ✨</span>
          <Button
            onClick={undo}
            text="Undo cast"
          />
        </p>
      ) : null}

      <p className='mb-2'><strong>Notes</strong></p>
      <div dangerouslySetInnerHTML={{ __html: spell.notes }}/>
    </>
  );
}

export default SpellModal;
