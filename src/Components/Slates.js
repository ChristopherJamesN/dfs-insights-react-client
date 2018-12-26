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
            <tr key={hit.id}>
              <td>Name: {hit.name}</td>
              <td>Max Entered Count: {hit.max_entered_count} </td>
            </tr>
          );
        });
        this.setState({ data: slates });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>{this.state.data}</tbody>
        </table>
      </div>
    );
  }
}

export default Slates;
