import React, { Component } from 'react';
import BackButton from './BackButton';
import HomeButton from './HomeButton';
import { Table } from 'reactstrap';

class Players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = localStorage.getItem('players' + this.props.match.params.id);
    if (!data) {
      fetch(
        'https://dfs-insights.herokuapp.com/slates/' +
          this.props.match.params.id +
          '/players.json',
        {
          'Content-Type': 'application/json'
        }
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let slates = data.map(hit => {
            return (
              <tr key={hit.id}>
                <td>{hit.name}</td>
                <td>{hit.points}</td>
                <td>{hit.ownership}</td>
                <td>{hit.position}</td>
              </tr>
            );
          });
          this.setState({ data: slates });
          localStorage.setItem(
            'players' + this.props.match.params.id,
            JSON.stringify(data)
          );
        })
        .catch(error => console.error('Error:', error));
    } else {
      let slates = JSON.parse(data).map(hit => {
        return (
          <tr key={hit.id}>
            <td>{hit.name}</td>
            <td>{hit.points}</td>
            <td>{hit.ownership}</td>
            <td>{hit.position}</td>
          </tr>
        );
      });
      this.setState({ data: slates });
    }
  }

  render() {
    return (
      <div>
        <HomeButton />
        <br />
        <BackButton />
        <br />
        <Table hover>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th scope="col">Ownership</th>
              <th scope="col">Position</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </Table>
      </div>
    );
  }
}

export default Players;
