import React from 'react';
import ReactDOM from 'react-dom';

import {getReducer} from './reducer';

const Button = (props) => (
  <button
    type="button"
    onClick={() => props.dispatch({type: props.type})}>
    {props.children}
  </button>
);

const App = () => {
  const [state, dispatch] = getReducer();
  return (
    <React.Fragment>
      {state.test}
      <Button dispatch={dispatch} type="addTest">Add 1</Button>
      <Button dispatch={dispatch} type="removeTest">Remove 1</Button>
      <Button dispatch={dispatch} type="reset">Reset</Button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
