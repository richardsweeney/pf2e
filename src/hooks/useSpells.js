import { useContext } from 'react';
import { CAST_CANTRIP, CAST_SPELL, store, UNDO_CAST, UNDO_CAST_CANTRIP } from '../stores/PlayerContext';

function useSpells () {
  const {
    state: {
      player,
      spellCasts,
      cantripCasts
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

  const castCantrip = () => {
    dispatch({
      type: CAST_CANTRIP
    })
  };

  const undoCastCantrip = () => {
    dispatch({
      type: UNDO_CAST_CANTRIP
    })
  };

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

  function getCantripTotals () {
    return {
      totalCasts: player.cantripCasts,
      numCasts: cantripCasts
    }
  }

  return {
    castSpell,
    undoCast,
    castCantrip,
    undoCastCantrip,
    getSpellTotals,
    getCantripTotals,
    getSpellsForLevel
  }
}

export default useSpells;
