import React, { Component } from 'react';
import './App.css';
import Slates from './Components/Slates.js';
import IntroText from './Components/IntroText';

class App extends Component {
    render() {
      return ( 
        <div><IntroText /> All Slates <Slates/></div>
      );
    }
}

export default App;
