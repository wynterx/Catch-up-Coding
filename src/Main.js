import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import QuestionFeed from './Components/QuestionFeed';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header isLogin />
          <Route exact path="/qa" component={QuestionFeed} />
          <Route path="/code" component={Code} />
        </Fragment>
      </Router>
    );
  }
}
