import React, { Component, Fragment } from 'react';
import { Feed } from 'semantic-ui-react';
import { Flex, Box, Image } from 'rebass';
import PropTypes from 'prop-types';
import QuestionForm from '../Components/QuestionForm';
<<<<<<< HEAD
import QuestionFilter from '../Components/QuestionFilter';
=======

import FeedItem from '../Components/FeedItem';

const sectionOptions = [
  { key: '1', text: 'section 1', value: '1' },
  { key: '2', text: 'section 2', value: '2' },
  { key: '3', text: 'section 3', value: '3' },
];
>>>>>>> c849287c56cbbc6aecb275dedaa95b96c11701c9

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
    sections: [
      { key: '1', text: 'section 1', value: '1' },
      { key: '2', text: 'section 2', value: '2' },
      { key: '3', text: 'section 3', value: '3' },
    ],
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
    const { user, imgSrc } = this.props;
    const { questions, filter, sections } = this.state;
    return (
<<<<<<< HEAD
      <Flex flexWrap="wrap" m={3}>
        <Box width={1}>
          <QuestionForm
            imgSrc={imgSrc}
            sections={sections}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Box>
        <Box width={1 / 4}>
          <QuestionFilter />
        </Box>
      </Flex>
=======
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
>>>>>>> c849287c56cbbc6aecb275dedaa95b96c11701c9
    );
  }
}

export default QuestionFeed;
