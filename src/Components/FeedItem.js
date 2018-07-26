import React, { Component } from 'react';
import { Feed, Icon, Button } from 'semantic-ui-react';
import { Flex, Box, Input, Image } from 'rebass';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import Text from './Text/Text';
import firebase from './firebase';

const GrayFlex = styled(Flex)`
  border: 1px solid rgb(224, 225, 226);
  border-radius: 6px;
`;
class FeedItem extends Component {
  state = {
    text: '',
    answers: [],
    expand: false,
  };
  handleLike = () => {
    const questionId = this.props.id;
    const countLike = this.props.likes ? Object.keys(this.props.likes).length : 0;
    console.log(countLike);
    this.props.firebase
      .child(questionId)
      .child('likes')
      .set({
        [this.props.passcode]: 1,
      });
  };

  handleAnswer = () => {
    const user = this.props.user;
    const countAnswer = this.props.answers ? Object.keys(this.props.answers).length : 0;
    const questionId = this.props.id;
    this.props.firebase
      .child(questionId)
      .child('answers')
      .child(countAnswer)
      .set({
        user,
        answer: this.state.text,
      });
    this.setState({ text: '' });
  };

  handleKeyEvent = e => {
    if (e.key == 'Enter') {
      this.handleAnswer();
    }
  };

  handleTextAnswer = e => {
    this.setState({ text: e.target.value });
  };

  componentDidMount() {
    const { answers } = this.props;
    this.setState({ answers: answers || [] });
  }

  handleExpand = () => {
    this.setState({ expand: !this.state.expand });
  };

  handleDeleteQuestion = () => {
    const questionId = this.props.id;
    this.props.firebase.child(questionId).remove();
  };

  render() {
    const { user, question, section, likes, answers = [], sections, passcode } = this.props;
    const { expand } = this.state;
    let liked = false;
    const likeArray = likes
      ? Object.keys(likes).map(function(key) {
          if (key === passcode) {
            liked = true;
          }
          return key;
        })
      : [];
    console.log(answers);
    return (
      <Feed.Event style={{ borderBottom: '1px solid #eaeaea', marginBottom: '24px' }}>
        <Box>
          <Image src={user.imgSrc} width={50} mx={2} />
        </Box>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>
              <Text primary>{user.displayName}</Text>
            </Feed.User>
            <Feed.Date>{section}</Feed.Date>
            <Button basic size="mini" floated="right" onClick={this.handleExpand}>
              <Icon name={expand ? 'chevron up' : 'chevron down'} />
              {expand ? 'Hide all answers' : 'Show all answers'}
            </Button>
            <Button basic size="mini" floated="right" onClick={this.handleDeleteQuestion}>
              <Icon name="trash" />
              Delete question
            </Button>
          </Feed.Summary>
          {question}
          <br />
          <Feed.Meta>
            <Feed.Like>
              {liked ? (
                <Button compact basic size="mini">
                  <Icon name="like" color="red" />
                  {likeArray.length} Likes
                </Button>
              ) : (
                <Button compact basic size="mini" onClick={this.handleLike}>
                  <Icon name="like" />
                  {likeArray.length} Likes
                </Button>
              )}
            </Feed.Like>
          </Feed.Meta>
          <Box m={3} />

          <GrayFlex alignItems="baseline">
            <Input
              type="text"
              placeholder="Answer here !"
              onChange={this.handleTextAnswer}
              value={this.state.text}
              onKeyUp={this.handleKeyEvent}
            />
            <Button type="submit" icon="send" onClick={this.handleAnswer} />
          </GrayFlex>
          {expand && (
            <Feed>
              {answers.map(({ user, answer }) => <AnswerItem user={user} answer={answer} />)}
            </Feed>
          )}
          <Box m={4} />
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default FeedItem;
