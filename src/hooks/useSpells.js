import { useContext } from 'react';
import { CAST_SPELL, store, UNDO_CAST } from '../stores/PlayerContext';

function useSpells () {
  const {
    state: {
      player,
      spellCasts
    },
    dispatch
  } = useContext(store);

  const castSpell = (level) => {
    dispatch({
      type: CAST_SPELL,
      payload: level
    });
  };

  const undoCast = (level) => {
    dispatch({
      type: UNDO_CAST,
      payload: level
    });
  }

  function getSpellsForLevel(level) {
    return player.spells
      .filter(spell => spell.level === level)
      .sort((spellA, spellB) => {
        const nameA = spellA.name.toUpperCase();
        const nameB = spellB.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }

        return (nameA > nameB) ? 1 : 0;
      });
  }

  function getSpellTotals (level) {
    return {
      totalCasts: player.spellCasts[level],
      numCasts: spellCasts[level]
    };
  }

  return {
    castSpell,
    undoCast,
    getSpellTotals,
    getSpellsForLevel
  }
}

export default useSpells;
