import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Players from '../Components/Players';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Players
        match={{
          params: {
            id: 1
          }
        }}
      />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
