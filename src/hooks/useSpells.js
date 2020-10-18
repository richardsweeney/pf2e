import { useContext } from 'react';
import { store } from '../stores/PlayerContext';

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
      type: 'CAST_SPELL',
      payload: level
    });
  };

  function getSpellTotals (level) {
    return {
      totalCasts: player.spellCasts[level],
      numCasts: spellCasts[level]
    };
  }

  return {
    castSpell,
    getSpellTotals
  }
}

export default useSpells;
