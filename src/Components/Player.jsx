import React, { Component } from 'react';

class Player extends Component {
  render() {
    return (
      <>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.points}</li>
          <li>{this.props.ownership}</li>
        </ul>
      </>
    );
  }
}

export default Player;
