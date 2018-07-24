import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './Components/Header';
import GitList from './Components/GitList';
import Home from './Components/Home';

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/gitlist" component={GitList} />
        </Fragment>
      </Router>
    );
  }
}
