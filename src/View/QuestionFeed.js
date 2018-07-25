import React, { Component, Fragment } from 'react';
import { Feed } from 'semantic-ui-react';
import { Flex, Box, Image, Border } from 'rebass';
import PropTypes from 'prop-types';
import QuestionForm from '../Components/QuestionForm';
import QuestionFilter from '../Components/QuestionFilter';
import FeedItem from '../Components/FeedItem';

const filterData = (items, filter, user) => {
  let filterItem = items;
  console.log(filter);
  if (filter.section) filterItem = filterItem.filter(item => filter.section === item.section);
  if (filter.postByUser) filterItem = filterItem.filter(item => user === item.user);
  return filterItem;
};
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
        section: 'section 1',
        likes: 200,
        answers: [{ user: 'Ching', answer: 'now' }],
      },
      {
        imgSrc: '',
        user: 'Roy',
        question: 'when is dinner ?',
        section: 'section 2',
        likes: 200,
        answers: [{ user: 'Ching', answer: 'now' }],
      },
      {
        imgSrc: '',
        user: 'Roy',
        question: 'when is dinner ?',
        section: 'section 3',
        likes: 200,
        answers: [{ user: 'Ching', answer: 'now' }],
      },
    ],
    filter: {},
    sections: [
      { key: 'all', text: 'All sections', value: '' },
      { key: '1', text: 'section 1', value: 'section 1' },
      { key: '2', text: 'section 2', value: 'section 2' },
      { key: '3', text: 'section 3', value: 'section 3' },
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

  handleFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };
  render() {
    const { user, imgSrc } = this.props;
    const { questions, filter, sections } = this.state;
    const feedItem = filterData(questions, filter, user);
    return (
      <Flex flexWrap="wrap" m={3} justifyContent="center">
        <Box width={1}>
          <QuestionForm
            imgSrc={imgSrc}
            sections={sections}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Box>

        <Box width={[1, 1 / 5]} mb={3}>
          <QuestionFilter sections={sections} handleFilter={this.handleFilter} />
        </Box>
        <Box width={[1, 3 / 5]} pl={3}>
          <Feed>{feedItem.map(e => <FeedItem {...e} />)}</Feed>
        </Box>
      </Flex>
    );
  }
}

export default QuestionFeed;
