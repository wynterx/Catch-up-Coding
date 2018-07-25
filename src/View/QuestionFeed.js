import React, { Component } from 'react';
import { Feed } from 'semantic-ui-react';
import { Flex, Box } from 'rebass';

import PropTypes from 'prop-types';
import QuestionForm from '../Components/QuestionForm';
import QuestionFilter from '../Components/QuestionFilter';
import FeedItem from '../Components/FeedItem';
import firebase from '../Components/firebase';

const filterData = (items, filter, user) => {
  let filterItem = items;
  if (filter.section) filterItem = filterItem.filter(item => filter.section === item.section);
  if (filter.postByUser) filterItem = filterItem.filter(item => user === item.user);
  if (filter.keyword)
    filterItem = filterItem.filter(item => item.question.indexOf(filter.keyword) >= 0);
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
    questions: [],
    filter: {},
    sections: [
      { key: 'all', text: 'All sections', value: 0 },
      { key: '1', text: 'section 1', value: 1 },
      { key: '2', text: 'section 2', value: 2 },
      { key: '3', text: 'section 3', value: 3 },
    ],
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref('/post');

    this.firebaseCallback = this.firebaseRef.on('value', snap => {
      const questions = snap.val();
      const result = Object.keys(questions).map(function(key) {
        return questions[key];
      });
      this.setState({ questions: result });
    });
  }

  componentWillUnmount() {
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  handleFormSubmit = newItem => {
    const { user, imgSrc } = this.props;

    const countQuestion = this.state.questions.length;
    this.firebaseRef.child(countQuestion).set({
      ...newItem,
      id: countQuestion,
      imgSrc,
      user,
      likes: 0,
      answers: {},
    });
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
        <Box width={1} mb={4}>
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
          <Feed>
            {feedItem.map(e => {
              return (
                <FeedItem
                  {...e}
                  questionId={e.id}
                  answers={e.answers}
                  firebase={this.firebaseRef}
                />
              );
            })}
          </Feed>
        </Box>
      </Flex>
    );
  }
}

export default QuestionFeed;
