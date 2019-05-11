import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Lineup from '../Components/Lineup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    props => (
      <Router>
        <Lineup {...props} />
      </Router>
    ),
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
