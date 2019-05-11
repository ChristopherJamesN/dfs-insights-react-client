import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from '../Components/BackButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <BackButton />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
