import React, { Component } from 'react';

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/slates/980191197/players.json', {
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
              <td>{hit.name}</td>
              <td>{hit.points}</td>
              <td>{hit.ownership}</td>
              <td>{hit.date}</td>
            </tr>
          );
        });
        this.setState({ data: slates });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th scope="col">Ownership</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </table>
      </div>
    );
  }
}

export default Players;
