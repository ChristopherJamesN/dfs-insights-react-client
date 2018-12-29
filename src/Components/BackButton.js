import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BackButton extends Component {
  static contextTypes = {
    router: () => true // replace with PropTypes.object if you use them
  };

  render() {
    return <Button onClick={this.context.router.history.goBack}>Back</Button>;
  }
}

export default BackButton;
