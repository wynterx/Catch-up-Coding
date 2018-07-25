import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from './Components/Header';
import Code from './View/Code';
import QuestionFeed from './View/QuestionFeed';

export default class Main extends Component {
  state = {
    user: '',
    imgSrc: '',
  };

  componentDidMount() {
    const { user, imgSrc } = this.props.location.state
      ? this.props.location.state
      : {
          user: 'anonymous',
          imgSrc: 'https://assets.skooldio.com/icon/face10_b.svg',
        };

    this.setState({
      user: user ? user : 'Anonymous',
      imgSrc: imgSrc ? imgSrc : 'https://assets.skooldio.com/icon/face10_b.svg',
    });
  }
  render() {
    const { user, imgSrc } = this.state;
    return (
      <Fragment>
        <Header isLogin user={user} imgSrc={imgSrc} />
        <Route path="/main/qa" component={() => <QuestionFeed user={user} imgSrc={imgSrc} />} />
        <Route path="/main/code" component={() => <Code user={user} imgSrc={imgSrc} />} />
      </Fragment>
    );
  }
}
