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
    const data = localStorage.getItem('entries' + this.props.match.params.id);
    if (!data) {
      fetch(
        process.env.REACT_APP_SERVER_URL +
          '/slates/' +
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
              /(P\s)|(C\s)|(1B)|(2B)|(SS)|(3B)|(OF)|(G\s)|(QB)|(RB)|(WR)|(TE)|(DST)|(FLEX)|(PG)|(SG)|(SF)|(PF)|(F\s)|(UTIL\s)/
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
          localStorage.setItem(
            'entries' + this.props.match.params.id,
            JSON.stringify(data)
          );
        })
        .catch(error => console.error('Error:', error));
    } else {
      let slates = JSON.parse(data).map(hit => {
        let lineup = hit.lineup.split(
          /(P\s)|(C\s)|(1B)|(2B)|(SS)|(3B)|(OF)|(G\s)|(QB)|(RB)|(WR)|(TE)|(DST)|(FLEX)|(PG)|(SG)|(SF)|(PF)|(F\s)|(UTIL\s)/
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
    }
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Entries;
