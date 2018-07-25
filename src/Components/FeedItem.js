import React, { Component } from 'react';
import { Feed, Icon, Button } from 'semantic-ui-react';
import { Flex, Box, Input } from 'rebass';
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
  handleLike = questionId => {
    this.props.handleLike(2);
  };

  handleAnswer = () => {
    //get user name
    console.log(this.props);
    const displayName = this.props.displayName;
    const countAnswer = this.props.answers ? Object.keys(this.props.answers).length : 0;
    const questionId = this.props.id;
    this.props.firebase
      .child(questionId)
      .child('answers')
      .child(countAnswer)
      .set({
        user: displayName,
        answer: this.state.text,
      });
    this.setState({ text: '' });
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

  render() {
    const { user, question, section, likes, answers, sections } = this.props;
    const { expand } = this.state;
    return (
      <Feed.Event style={{ borderBottom: '1px solid #eaeaea', marginBottom: '24px' }}>
        <Icon size="huge" name="user circle outline" />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>
              <Text primary>{user}</Text>
            </Feed.User>
            <Feed.Date>{section}</Feed.Date>
            <Button basic size="mini" floated="right" onClick={this.handleExpand}>
              <Icon name={expand ? 'chevron up' : 'chevron down'} />
              {expand ? 'Hide all answers' : 'Show all answers'}
            </Button>
          </Feed.Summary>
          {question}
          <br />
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" onClick={this.handleLike} />
              {likes} Likes
            </Feed.Like>
          </Feed.Meta>
          <Box m={3} />

          <GrayFlex alignItems="baseline">
            <Input
              type="text"
              placeholder="Answer here !"
              onChange={this.handleTextAnswer}
              value={this.state.text}
            />
            <Button type="submit" icon="send" onClick={this.handleAnswer} />
          </GrayFlex>
          {expand && (
            <Feed>
              {this.props.answers.map(({ user, answer }) => (
                <AnswerItem user={user} answer={answer} />
              ))}
            </Feed>
          )}
          <Box m={4} />
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default FeedItem;
