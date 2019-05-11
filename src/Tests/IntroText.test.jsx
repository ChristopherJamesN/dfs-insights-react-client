import React from 'react';
import ReactDOM from 'react-dom';
import IntroText from '../Components/IntroText';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntroText />, div);
  ReactDOM.unmountComponentAtNode(div);
});
