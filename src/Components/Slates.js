import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  cachedFetch(url) {
    let cacheKey = url;
    let cached = localStorage.getItem(cacheKey);
    if (cached != null) {
      return cached;
    }
    let response = fetch(url, { 'Content-Type': 'application/json' });
    localStorage.setItem(url, response);
    return response;
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
        let cacheKey = 'http://localhost:3000/slates.json';
        localStorage.setItem(cacheKey, data);
        let slates = data.map(hit => {
          return (
            <tr key={hit.id}>
              <td>{hit.name}</td>
              <td>{hit.max_entered_count} </td>
              <td>{hit.entries[1].name}</td>
              <td>{hit.entries[1].points}</td>
              <td>{hit.date}</td>
              <td>
                <Link key={hit.id} to={`/slates/${hit.id}`}>
                  {hit.name}
                </Link>
              </td>
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
              <th scope="col">Max Entered Count</th>
              <th scope="col">Winner</th>
              <th scope="col">Points</th>
              <th scope="col">Date</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </table>
      </div>
    );
  }
}

export default Slates;
