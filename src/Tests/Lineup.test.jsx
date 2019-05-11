import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Lineup from '../Components/Lineup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Lineup />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
