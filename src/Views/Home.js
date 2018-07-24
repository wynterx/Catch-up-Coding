import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { Flex, Box, BackgroundImage } from 'rebass';
import styled from 'styled-components';

import Text from '../Components/Text/Text';

const FontH1 = styled.h1`
  font-family: 'Gaegu';
  font-size: 54px;
  font-weight: 900;
  margin: 0;
`;

const FontH4 = styled.h4`
  font-family: 'Gaegu';
  font-size: 20px;
  font-weight: 600;
`;

class Home extends Component {
  render() {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Box width={500}>
          <Flex alignItems="center" justifyContent="center">
            <Text fontSize="54px" fontWeight="900">
              WELCOME
            </Text>
            <Box m={3} />
            <Box w={50}>
              <BackgroundImage
                ratio={1}
                src="https://cdn.icon-icons.com/icons2/508/PNG/512/happy_smiley_icon-icons.com_49910.png"
              />
            </Box>
          </Flex>
          <Form>
            <Flex my={4}>
              <Box w={1 / 3} alignSelf="center">
                <Text fontSize="20px" fontWeight="600">
                  PASSCODE :
                </Text>
              </Box>
              <Box w={2 / 3}>
                <Form.Field control="input" placeholder="Passcode" />
              </Box>
            </Flex>
            <Flex my={4}>
              <Box w={1 / 3} alignSelf="center">
                <Text fontSize="20px" fontWeight="600">
                  DISPLAY NAME :
                </Text>
              </Box>
              <Box w={2 / 3}>
                <Form.Field control="input" placeholder="Display name" />
              </Box>
            </Flex>
            <Flex justifyContent="flex-end">
              <Button
                size="big"
                primary
                type="submit"
                onSubmit={() => <Redirect to="/gitlist">Git List</Redirect>}
              >
                <Text>START LEARNING !</Text>
              </Button>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }
}

export default Home;
