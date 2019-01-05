import React, { Component } from 'react';
import BackButton from './BackButton';
import HomeButton from './HomeButton';
import { Table } from 'reactstrap';
import Lineup from './Lineup';

class Entries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      'http://localhost:3000/slates/' +
        this.props.match.params.id +
        '/entries.json',
      {
        'Content-Type': 'application/json'
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let slates = data.map(hit => {
          let lineup = hit.lineup.split(
            /(P\s)|(C\s)|(1B)|(2B)|(SS)|(3B)|(OF)|(\sG\s)|(QB)|(RB)|(WR)|(TE)|(DST)|(FLEX)|(PG)|(SG)|(SF)|(PF)|(F\s)/
          );
          return (
            <tr key={hit.id}>
              <td>{hit.name}</td>
              <td>{hit.points}</td>
              <td>
                <Lineup Lineup={lineup} />
              </td>
              <td>{hit.updated_at}</td>
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
        <HomeButton />
        <br />
        <BackButton />
        <br />
        <Table hover>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Points</th>
              <th scope="col">Lineup</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </Table>
      </div>
    );
  }
}

export default Entries;
