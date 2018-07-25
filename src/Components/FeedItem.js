import React, { Component } from 'react';
import { Feed, Icon, Divider, Button } from 'semantic-ui-react';
import { Flex, Box, Input } from 'rebass';
import styled from 'styled-components';

import AnswerItem from './AnswerItem';
import Text from './Text/Text';

const GrayFlex = styled(Flex)`
  border: 1px solid rgb(224, 225, 226);
  border-radius: 6px;
`;
class FeedItem extends Component {
  state = {
    expand: false,
  };

  handleExpand = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    const { user, question, section, likes, answers, sections } = this.props;
    const { expand } = this.state;
    return (
      <Feed.Event>
        <Icon size="huge" name="user circle outline" />
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>
              <Text>{user}</Text>
            </Feed.User>
            <Feed.Date>Section {section}</Feed.Date>
            <Button
              basic
              size="mini"
              floated="right"
              icon={expand ? 'chevron up' : 'chevron down'}
              onClick={this.handleExpand}
            />
          </Feed.Summary>
          {question}
          <br />
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              {likes} Likes
            </Feed.Like>
          </Feed.Meta>
          <Box m={3} />

          <GrayFlex alignItems="baseline">
            <Input type="text" placeholder="Answer here !" />
            <Button type="submit" icon="send" />
          </GrayFlex>
          {expand && (
            <Feed>
              {answers.map(({ user, answer }) => <AnswerItem user={user} answer={answer} />)}
            </Feed>
          )}
          <Divider />
        </Feed.Content>
      </Feed.Event>
    );
  }
}

export default FeedItem;
