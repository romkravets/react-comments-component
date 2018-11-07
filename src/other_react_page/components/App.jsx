import * as React from 'react';
import { Component } from 'react';

import { GlobalNav } from '../../common/components/global-nav/GlobalNav.jsx';

export class App extends Component {
  render() {
    return <div className="page">
      <GlobalNav />
      <div className="page-content">
        <h1>Other page</h1>
      </div>
    </div>
  }
}