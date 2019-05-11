import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Lineup from '../Components/Lineup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Lineup
        Lineup={[
          'P Jack Flaherty P Carlos Carrasco SS José Peraza 2B Jonathan Villar OF George Springer OF Adam Jones 3B Tim Beckham 1B Chris Davis OF Craig Gentry C Victor Caratini'
        ]}
      />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
