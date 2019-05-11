import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Entries from '../Components/Entries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    props => (
      <Router>
        <Entries {...props} />
      </Router>
    ),
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
