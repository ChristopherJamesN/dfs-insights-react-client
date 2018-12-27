import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Players from './Components/Players';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route exact path="/players" component={Players} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
