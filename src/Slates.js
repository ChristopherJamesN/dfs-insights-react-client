import React, { Component } from 'react';

class Slates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
      fetch('https://dfs-insights.herokuapp.com/slates.json', {
          mode: "no-cors", // no-cors, cors, *same-origin
      })
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
        .catch(error => console.error('Error:', error));
    }

    render() {
      return ( 
        <div>{this.state.data}</div>
      );
    }
}

export default Slates;