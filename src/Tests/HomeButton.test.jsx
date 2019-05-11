import React from 'react';
import ReactDOM from 'react-dom';
import HomeButton from '../Components/HomeButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
