import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import QuestionFeed from './View/QuestionFeed';

export default class Main extends Component {
  state = {
    user: this.props.location.state.user,
  };
  render() {
    return (
      <Fragment>
        <Header isLogin user={this.state.user} />
        <Route path="/main/qa" component={QuestionFeed} user={this.state.user} />
        <Route path="/main/code" component={Code} />
      </Fragment>
    );
  }
}
