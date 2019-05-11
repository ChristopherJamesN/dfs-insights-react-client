import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Slates from '../Components/Slates';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Slates />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
