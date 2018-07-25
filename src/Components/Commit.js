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
      <Flex flexDirection="column" my="2%" mx="5%" justifyContent="center" wrap>
        <Flex mb={4}>
          <Box width={1 / 9}>
            <h2>Section</h2>
          </Box>
          <Box width={7 / 9}>
            <h2>Description</h2>
          </Box>
        </Flex>
        {commits.map((commit, index) => {
          return (
            <Flex mb={3} ml={3}>
              <Box
                width={2 / 25}
                is="a"
                target="_blank"
                rel="noopener noreferrer"
                mr={3}
                href={commit.html_url}
              >
                Section {index + 1}
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
