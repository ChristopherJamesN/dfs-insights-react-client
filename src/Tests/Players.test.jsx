import React from 'react';
import ReactDOM from 'react-dom';
import Players from '../Components/Players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players />, div);
  ReactDOM.unmountComponentAtNode(div);
});
