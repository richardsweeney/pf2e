import { useContext } from 'react';
import { SET_HP, store } from '../stores/PlayerContext';

function useHP () {
  const {
    state: {
      HP
    },
    dispatch
  } = useContext(store);

  function setHP (hp) {
    dispatch({
      type: SET_HP,
      payload: hp
    });
  }

  return {
    setHP,
    HP
  }
}

export default useHP;
