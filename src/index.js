import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Players from './Components/Players';
import Entries from './Components/Entries';
import Slates from './Components/Slates';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/slates" exact>
      Slates
    </NavLink>
    <NavLink to="/players" exact>
      Players
    </NavLink>
    <NavLink to="/entries" exact>
      Entries
    </NavLink>
  </div>
);

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/slates" component={Slates} />
      <Route exact path="/players" component={Players} />
      <Route exact path="/entries" component={Entries} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
