import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeButton from '../Components/HomeButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <HomeButton />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
