import React, { Component } from 'react';
import Slate from './Slate';

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
              <td>{hit.name}</td>
              <td>{hit.max_entered_count} </td>
              <td>{hit.entries[1].name}</td>
              <td>{hit.entries[1].points}</td>
              <td>{hit.date}</td>
              <Slate name={hit.name} />
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
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Max Entered Count</th>
              <th scope="col">Winner</th>
              <th scope="col">Points</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </table>
      </div>
    );
  }
}

export default Slates;
