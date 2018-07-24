import React, { Component } from 'react';
import { Flex, Box } from 'rebass';

class Commit extends Component {
  state = {
    commitList: [],
  };

  render() {
    console.log(this.props);
    const { commits } = this.props;
    return (
      <Flex flexDirection="column" m="5%" justifyContent="center" wrap>
        {commits.map(commit => {
          return (
            <Flex mb={3}>
              <Box
                width={1 / 25}
                is="a"
                target="_blank"
                rel="noopener noreferrer"
                mr={3}
                href={commit.html_url}
              >
                {commit.sha.slice(0, 5)}
              </Box>

              <Box width={8 / 9} mr={3} pl={3} href={commit.html_url}>
                {commit.commit.message}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    );
  }
}

export default Commit;
