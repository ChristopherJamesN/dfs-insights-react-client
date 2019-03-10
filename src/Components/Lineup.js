import React, { Component } from 'react';

class Lineup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let count = 0;
    let lineup = this.props.Lineup.map(element => {
      count += 1;
      return <div key={count}>{element}</div>;
    });
    this.setState({ data: lineup });
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Lineup;
