import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react';
import { Flex, Box, Image } from 'rebass';

const sectionOptions = [
  { key: '1', text: 'section 1', value: '1' },
  { key: '2', text: 'section 2', value: '2' },
  { key: '3', text: 'section 3', value: '3' },
];

class QuestionFeed extends Component {
  state = {};

  handleChange = (e, { name, label, value }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    const { value } = this.state;
    return (
      <Flex mx={4} justifyContent="center" alignItems="flex-start">
        <Box>
          <Image
            src="https://s-media-cache-ak0.pinimg.com/originals/4a/33/0f/4a330f8fabfda8fd3009543e816951b1.gif"
            width={132}
          />
        </Box>
        <Box>
          <Form>
            <Form.Field
              control={TextArea}
              name="question"
              // label="question"
              placeholder="Tell us more about you..."
              onChange={this.handleChange}
            />
            <Form.Field
              control={Select}
              name="section"
              // label="section"
              options={sectionOptions}
              placeholder="Section"
              onChange={this.handleChange}
            />
            <Form.Field control={Button} onClick={this.handleSubmit} primary>
              Submit
            </Form.Field>
          </Form>
        </Box>
      </Flex>
    );
  }
}

export default QuestionFeed;
