import { useContext } from 'react';
import { SET_PLAYER, store } from '../stores/PlayerContext';
import getPlayer from '../functions/player-functions';

function usePlayer () {
  const {
    state: {
      player
    },
    dispatch
  } = useContext(store);

  function setPlayer (id) {
    dispatch({
      type: SET_PLAYER,
      payload: getPlayer(id)
    });
  }

  return {
    player,
    setPlayer
  };
}

export default usePlayer;
