import React, { Component, Fragment } from 'react';
import { Feed } from 'semantic-ui-react';
import { Flex, Box, Image } from 'rebass';
import PropTypes from 'prop-types';
import QuestionForm from '../Components/QuestionForm';

import FeedItem from '../Components/FeedItem';

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
    questions: [
      {
        imgSrc: '',
        user: 'Roy',
        question: 'when is dinner ?',
        section: 1,
        likes: 200,
        answers: [{ user: 'Ching', answer: 'now' }],
      },
    ],
    filter: {},
    section: [],
  };

  handleFormSubmit = newItem => {
    const { user, imgSrc } = this.props;
    const copyQuestions = this.state.questions;
    copyQuestions.push({
      ...newItem,
      imgSrc,
      user,
      likes: 0,
      answers: [],
    });
    this.setState({
      questions: copyQuestions,
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
            {[1, 2, 2].map(e => (
              <FeedItem
                user="ching"
                question="asdasdasdasjkdhaks"
                likes={5}
                section={1}
                answers={[{ user: 'hh', answer: 'asdas' }, { user: 'gsd', answer: 'asdaasdasds' }]}
              />
            ))}
          </Feed>
        </Flex>
      </Fragment>
    );
  }
}

export default QuestionFeed;
