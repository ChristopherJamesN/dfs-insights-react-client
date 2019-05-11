import React from 'react';
import ReactDOM from 'react-dom';
import Slate from '../Components/Slate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
