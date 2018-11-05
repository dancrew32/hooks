import React from 'react';
import ReactDOM from 'react-dom';

import {getStateAndActions} from './reducer';

const Button = (props) => (
  <button type="button" onClick={props.onClick}>{props.children}</button>
);

const App = () => {
  const [state, actions] = getStateAndActions();
  return (
    <React.Fragment>
      {state.test}
      <Button onClick={actions.addTest}>Add 1</Button>
      <Button onClick={actions.removeTest}>Remove 1</Button>
      <Button onClick={actions.reset}>Reset</Button>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
