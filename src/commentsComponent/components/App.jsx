import * as React from 'react';
import { Component } from 'react';

import { CommentsList } from './comments-list/CommentsList.jsx';

export class App extends Component {

  render() {

    return <div className="page">
      <div className="page-content">
        <CommentsList />
      </div>
    </div>
  }
}