import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class HomeButton extends Component {
  static contextTypes = {
    router: () => null
  };

  render() {
    return (
      <Link to="/">
        <Button
          color="primary"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Home
        </Button>
      </Link>
    );
  }
}

export default HomeButton;
