import * as React from 'react';
import { HTTPService } from '../../../common/scripts/http-service';

import './CommentsList.scss';

const URL = 'https://evening-dawn-11092.herokuapp.com/list';

export class CommentsList extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.valueChange = this.valueChange.bind(this);
    this.httpService = new HTTPService();
    this.state = {
      comments: [],
      newcommentTitle: ''
    };

    this.getData();

  }

  getData() {
    this.httpService.get(URL, (comments) => {
      this.setState((oldState) => {
        const newState = Object.assign({}, oldState);
        newState.comments = comments;
        return newState;
      });
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.state.newcommentTitle;

    this.httpService.post(URL, { title }, (comment) => {
      this.setState((oldState) => {
        const newState = Object.assign({}, oldState);
        newState.newcommentTitle = '';
        newState.comments.push(comment);
        return newState;
      });
    });
  }

  valueChange(e) {
    const value = e.target.value;
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.newcommentTitle = value;
      return newState;
    })
  }

  render() {
    const listItems = this.state.comments.map((comment, i) => {
      return <li className="comment__items" key={i}>{comment.title}</li>
    });
    return <div className="comment">
      <div className="comment__box">
        <h2 className="comment__title">Comments</h2>
        <div className="comment__lists">
           {listItems}
        </div>
        <div className="comment__forms">
          <form className="comment__form" onSubmit={this.onSubmit}>
          <input
            type = "text"
            className ="comment__text_input"
            placeholder = "Add comment"
            onChange = {this.valueChange}
            value = {this.state.newcommentTitle}/>
          <button className="comment__button">Send</button>
          </form>
    </div>
    </div>
    </div>

}

}