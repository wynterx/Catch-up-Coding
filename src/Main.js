import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import QuestionFeed from './View/QuestionFeed';

export default class Main extends Component {
  state = {
    user: { passcode: '', displayName: '', imgSrc: '' },
  };

  componentDidMount() {
    const { user } = this.props.location.state;

    this.setState({
      user: {
        displayName: user.displayName ? user.displayName : 'anonymous',
        imgSrc: user.imgSrc ? user.imgSrc : 'https://assets.skooldio.com/icon/face10_b.svg',
        passcode: user.passcode ? user.passcode : '000',
      },
    });
  }
  render() {
    const { user } = this.state;
    return (
      <Fragment>
        <Header isLogin user={user} />
        <Route path="/main/qa" component={() => <QuestionFeed user={user} />} />
        <Route path="/main/code" component={() => <Code />} />
      </Fragment>
    );
  }
}
