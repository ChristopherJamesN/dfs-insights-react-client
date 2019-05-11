import React from 'react';
import ReactDOM from 'react-dom';
import Slates from '../Components/Slates';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slates />, div);
  ReactDOM.unmountComponentAtNode(div);
});
