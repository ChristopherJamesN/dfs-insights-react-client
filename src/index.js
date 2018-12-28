import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Players from './Components/Players';
import Entries from './Components/Entries';
import Slates from './Components/Slates';
import Slate from './Components/Slate';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'reactstrap';

const NavbarConst = () => (
  <Navbar>
    <Nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/slates" exact>
        Slates
      </NavLink>
    </Nav>
  </Navbar>
);

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavbarConst />
      <Route exact path="/" component={App} />
      <Route exact path="/slates" component={Slates} />
      <Route exact path="/slates/:id" component={Slate} />
      <Route path="/slates/:id/players" component={Players} />
      <Route path="/slates/:id/entries" component={Entries} />
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
