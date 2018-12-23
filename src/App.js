import React, { Component } from 'react';
import './App.css';
import Slates from './Slates.js';
//https://dfs-insights.herokuapp.com/slates.json

class App extends Component {
    render() {
      return ( 
        <div> All Slates <Slates/></div>
      );
    }
}

export default App;
