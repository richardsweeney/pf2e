import {useState} from 'react';
import { data } from '../data/spells.json';

const mapSpell = ({ name, id }) => {
  return {
    name,
    id,
    casts: 0
  };
};

function useCastsSpell() {
  const [castSpells, setCastSpells] = useState(data.map(mapSpell));

  const cast = (spellId) => {
    const index = castSpells.findIndex(({ id }) => id === spellId);
    const castSpellsToUpdate = [...castSpells];

    castSpellsToUpdate[index].casts++;

    setCastSpells(castSpellsToUpdate);
  };

  return {
    castSpells,
    cast
  }
}

export default useCastsSpell;
