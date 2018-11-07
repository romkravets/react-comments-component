import * as React from 'react';
import { Component } from 'react';

import { MenuReact } from '../../common/components/menu-react/MenuReact.jsx';
import { CommentsList } from './comments-list/CommentsList.jsx';

export class App extends Component {

  render() {

    return <div className="page">
      <MenuReact />
      <div className="page-content">
        <CommentsList />
      </div>
    </div>
  }
}