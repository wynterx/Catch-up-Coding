import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import QuestionFeed from './View/QuestionFeed';

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header isLogin />
        <Route path="/main/qa" component={QuestionFeed} />
        <Route path="/main/code" component={Code} />
      </Fragment>
    );
  }
}
