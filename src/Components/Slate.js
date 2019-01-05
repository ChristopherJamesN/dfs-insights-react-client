import React, { Component } from 'react';
import BackButton from './BackButton';
import HomeButton from './HomeButton';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

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
        return response.json();
      })
      .then(data => {
        this.setState({ data: data });
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    let percentage = String(
      (
        (this.state.data.count_20_entries * 20 * 100) /
        this.state.data.totalEntries
      ).toPrecision(4)
    );
    return (
      <div>
        <HomeButton />
        <br />
        <BackButton />
        <br />
        <Table hover>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{this.props.match.params.id}</td>
            </tr>
            <tr>
              <td>Max Entered Count</td>
              <td>{this.state.data.max_entered_count}</td>
            </tr>
            <tr>
              <td>Sport</td>
              <td>{this.state.data.sport}</td>
            </tr>
            <tr>
              <td>Total Entries</td>
              <td>{this.state.data.totalEntries}</td>
            </tr>
            <tr>
              <td>Count 20 Entries</td>
              <td>{this.state.data.count_20_entries}</td>
            </tr>
            <tr>
              <td>Count 150 Entries</td>
              <td>{this.state.data.count_150_entries}</td>
            </tr>
            <tr>
              <td>Percentage of Entries from Max Entered Contestants</td>
              <td>{percentage}</td>
            </tr>
            <tr>
              <td>Link to Entries</td>
              <td>
                <Link
                  key={this.props.match.params.id + 100000}
                  to={`/slates/${this.props.match.params.id}/entries`}
                >
                  Entries
                </Link>
              </td>
            </tr>
            <tr>
              <td>Link to Players</td>
              <td>
                <Link
                  key={this.props.match.params.id + 100001}
                  to={`/slates/${this.props.match.params.id}/players`}
                >
                  Players
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Slate;
