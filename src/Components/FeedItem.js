import React, { Component } from 'react';
import { Feed, Icon, Divider, Button } from 'semantic-ui-react';
import { Flex, Box, Input } from 'rebass';
import styled from 'styled-components';
import Text from './Text/Text';

const GrayFlex = styled(Flex)`
  border: 1px solid rgb(224, 225, 226);
  border-radius: 6px;
`;
class FeedItem extends Component {
  state = {
    text: '',
    answers: [],
  };
  handleLike = questionId => {
    this.props.handleLike(2);
  };

  handleAnswer = () => {
    //get user name

    const countAnswer = this.state.answers.length;
    this.props.firebase
      .child(this.props.questionId - 1)
      .child('answers')
      .child(countAnswer)
      .set({
        user: 'userans2',
        answer: this.state.text,
      });
  };

  handleTextAnswer = e => {
    this.setState({ text: e.target.value });
  };

  componentDidMount() {
    const { answers } = this.props;
    this.setState({ answers: answers || [] });
  }
  render() {
    const { user, question, section, likes } = this.props;
    console.log(this.state.answers, 'answerr');
    return (
      <Feed.Event>
        <Icon size="huge" name="user circle outline" />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>
              <Text>{user}</Text>
            </Feed.User>
            <Feed.Date>Section {section}</Feed.Date>
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
            <Input type="text" placeholder="Answer here !" onChange={this.handleTextAnswer} />
            <Button type="submit" icon="send" onClick={this.handleAnswer} />
          </GrayFlex>

          <Feed>
            {this.state.answers.map(({ user, answer }) => (
              <Feed.Event>
                <Feed.Content>
                  <Feed.User>
                    <Text>{user}</Text>
                  </Feed.User>
                  : {answer}
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
          <Divider />
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default FeedItem;
