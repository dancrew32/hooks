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

const mapDispatch = (dispatch) => ({
  reset: () => dispatch({ type: 'reset' }),
  addTest: () => dispatch({ type: 'addTest' }),
  removeTest: () => dispatch({ type: 'removeTest' })
});

export const getStateAndActions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = mapDispatch(dispatch);
  return [state, actions];
};
