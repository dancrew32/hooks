import {useReducer} from 'react';

const initialState = {
  test: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'addTest':
      return {test: state.test + 1};
    case 'removeTest':
      return {test: state.test - 1};
  }
};

export const getReducer = () => {
  return useReducer(reducer, initialState);
};
