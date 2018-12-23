import React, { Component } from 'react';
import './App.css';
//https://dfs-insights.herokuapp.com/slates.json

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
      fetch('https://dfs-insights.herokuapp.com/slates.json')
        .then(response => {
          return response.json();
        }).then(data => {
          let slates = data.response.map((hit) => {
            return(
              <div key={hit.id}> {hit.name} </div>
            )
          })
          this.setState({data: slates})
        })
    }

    render() {
      return ( 
        <div>{this.state.data}</div>
      );
    }
}

export default App;
