import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Player from '../Components/Player';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Player />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
