import React, { Component, Fragment } from 'react';
import { Feed } from 'semantic-ui-react';
import { Flex, Box, Image } from 'rebass';
import PropTypes from 'prop-types';
import QuestionForm from '../Components/QuestionForm';

import FeedItem from '../Components/FeedItem';
import firebase from '../Components/firebase';

const sectionOptions = [
  { key: '1', text: 'section 1', value: '1' },
  { key: '2', text: 'section 2', value: '2' },
  { key: '3', text: 'section 3', value: '3' },
];

class QuestionFeed extends Component {
  static PropTypes = {
    user: PropTypes.string,
    imgSrc: PropTypes.string,
  };
  static defaultProps = {
    user: 'anonymous',
    imgSrc:
      'https://s-media-cache-ak0.pinimg.com/originals/4a/33/0f/4a330f8fabfda8fd3009543e816951b1.gif',
  };
  state = {
    questions: [],
    filter: {},
    section: [],
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref('/post');
    this.firebaseCallback = this.firebaseRef.on('value', snap => {
      const questions = snap.val();

      this.setState({ questions });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  handleFormSubmit = newItem => {
    const { user, imgSrc } = this.props;
    // const copyQuestions = this.state.questions;
    // copyQuestions.push({
    //   ...newItem,
    //   imgSrc,
    //   user,
    //   likes: 0,
    //   answers: [],
    // });
    // this.setState({
    //   questions: copyQuestions,
    // });

    const countQuestion = this.state.questions.length;
    console.log(countQuestion);
    this.firebaseRef.child(countQuestion).set({
      ...newItem,
      id: countQuestion,
      imgSrc,
      user,
      likes: 0,
      answers: {},
    });
    console.log(this.state.questions);
  };
  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <QuestionForm handleFormSubmit={this.handleFormSubmit} />
        <Flex mx={4} justifyContent="center" alignItems="flex-start" w="70%">
          <Feed>
            {this.state.questions.map(item => {
              const { id, question, likes, answers } = item;
              return (
                <FeedItem
                  key={id}
                  questionId={id}
                  user="ching"
                  question={question}
                  likes={likes}
                  section={1}
                  answers={answers}
                  firebase={this.firebaseRef}
                />
              );
            })}
          </Feed>
        </Flex>
      </Fragment>
    );
  }
}

export default QuestionFeed;
