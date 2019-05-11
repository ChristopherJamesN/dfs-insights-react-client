import React from 'react';
import ReactDOM from 'react-dom';
import Lineup from '../Components/Lineup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lineup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
