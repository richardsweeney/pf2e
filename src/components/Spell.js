import React from 'react';
import useCastsSpell from '../hooks/useCastsSpell';
import Property from './Property';

function Spell ({ spell }) {
  const { castSpells, cast } = useCastsSpell();
  const castSpell = castSpells.find(({ id }) => id === spell.id);
  const properties = {
    'Moves': spell.moves,
    'Level': spell.level,
    'Range': `${spell.range} ft.`,
    'Targets': (spell.targets) ? `${spell.targets} creatures` : 'n/a',
    'Prepared': (spell.prepared) ? 'Yes' : 'No'
  };

  return (
    <div className="w-1/2 mb-8">
      <h4 className="font-semibold text-2xl mb-2">{spell.name}</h4>
      <p className="mb-4">(Casts * {castSpell.casts})</p>

      {Object.entries(properties).map(([label, value], index) => (
        <Property key={index} label={label} value={value}/>
      ))}

      <button className="mt-2 font-semibold bg-blue-600 text-white py-2 px-4 rounded" onClick={() => cast(spell.id)}>Cast spell</button>
    </div>
  );
}

export default Spell;
