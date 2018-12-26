import React, { Component } from 'react';

class Slates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/slates.json', {
      'Content-Type': 'application/json'
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        let slates = data.map(hit => {
          return (
            <div key={hit.id}>
              Name: {hit.name} Max Entered Count: {hit.max_entered_count}{' '}
            </div>
          );
        });
        this.setState({ data: slates });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Slates;
