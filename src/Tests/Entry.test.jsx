import React from 'react';
import ReactDOM from 'react-dom';
import Entry from '../Components/Entry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Entry />, div);
  ReactDOM.unmountComponentAtNode(div);
});
