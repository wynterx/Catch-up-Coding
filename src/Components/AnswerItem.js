import React from 'react';
import { Feed } from 'semantic-ui-react';
import Text from './Text/Text';

const AnswerItem = ({ user, answer }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.User>
        <Text primary>{user.displayName}</Text>
      </Feed.User>
      : {answer}
    </Feed.Content>
  </Feed.Event>
);
export default AnswerItem;
