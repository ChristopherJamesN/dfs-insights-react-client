import React, { Component } from 'react';

class Slate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      'http://localhost:3000/slates/' + this.props.match.params.id + '.json',
      {
        'Content-Type': 'application/json'
      }
    )
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <ul>
          <li>ID: {this.props.match.params.id}</li>
          <li>Max Entered Count: {this.state.data.max_entered_count}</li>
          <li>Sport: {this.state.data.sport}</li>
          <li>Total Entries: {this.state.data.totalEntries}</li>
        </ul>
      </div>
    );
  }
}

export default Slate;
