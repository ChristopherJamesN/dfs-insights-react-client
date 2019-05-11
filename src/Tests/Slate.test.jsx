import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Slate from '../Components/Slate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Slate />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
