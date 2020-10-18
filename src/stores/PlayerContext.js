import React, { createContext, useReducer } from 'react';

const initialState = {
  player: null,
  spellCasts: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case 'SET_PLAYER':
        return {
          ...state,
          player: payload
        };

      case 'CAST_SPELL':
        const spellCasts = { ...state.spellCasts };
        spellCasts[payload]++;

        console.log({ state, spellCasts });

        return {
          ...state,
          spellCasts
        }
      default:
        throw new Error();
    }
  }, initialState);

  return (
    <Provider value={{ state, dispatch }}>{children}</Provider>
  );
};

export { store, StateProvider };
