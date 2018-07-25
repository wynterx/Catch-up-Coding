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
  render() {
    const { user, question, section, likes, answers, sections } = this.props;
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
              <Icon name="like" />
              {likes} Likes
            </Feed.Like>
          </Feed.Meta>
          <Box m={3} />

          <GrayFlex alignItems="baseline">
            <Input type="text" placeholder="Answer here !" />
            <Button type="submit" icon="send" />
          </GrayFlex>

          <Feed>
            {answers.map(({ user, answer }) => (
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
