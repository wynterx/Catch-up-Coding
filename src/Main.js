import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import Home from './Components/Home';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/code" component={Code} />
        </Fragment>
      </Router>
    );
  }
}
