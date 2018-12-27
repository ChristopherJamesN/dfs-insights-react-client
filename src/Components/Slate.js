import React, { Component } from 'react';

class Slate extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.max_entered_count}</li>
          <li>{this.props.winner}</li>
          <li>{this.props.winner_points}</li>
        </ul>
      </div>
    );
  }
}

export default Slate;
