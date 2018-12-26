import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class IntroText extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <h2>Welcome to DFSInsights</h2>
          </BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem>
            <p>This app does DFS analysis kind of.</p>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}

export default IntroText;
