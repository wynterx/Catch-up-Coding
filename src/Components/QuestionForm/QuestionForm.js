import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react';
import { Flex, Box, Image, Circle } from 'rebass';
import PropTypes from 'prop-types';

const sectionOptions = [
  { key: '1', text: 'section 1', value: '1' },
  { key: '2', text: 'section 2', value: '2' },
  { key: '3', text: 'section 3', value: '3' },
];

class QuestionForm extends Component {
  static PropTypes = {
    handleFormSubmit: PropTypes.func,
    imgSrc: PropTypes.string,
  };

  static defaultProps = {
    handleFormSubmit: () => {},
    imgSrc:
      'https://s-media-cache-ak0.pinimg.com/originals/4a/33/0f/4a330f8fabfda8fd3009543e816951b1.gif',
  };

  state = { question: '', section: '' };

  handleChange = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { handleFormSubmit } = this.props;
    const copyState = this.state;
    this.setState({ question: '', section: '' });
    handleFormSubmit(copyState);
  };
  render() {
    const { question, section } = this.state;
    const { imgSrc } = this.props;
    return (
      <Flex mx={4} justifyContent="center" alignItems="flex-start" flexWrap="wrap">
        <Circle size={128} bg="pink" mx={2} my={2}>
          <Image src={imgSrc} />
        </Circle>
        <Box width={[1, 1 / 2]}>
          <Form>
            <Box width={1} p={2}>
              <Form.Field
                control={TextArea}
                name="question"
                placeholder="Tell us more about you..."
                value={question}
                onChange={this.handleChange}
              />
            </Box>
            <Flex justifyContent="space-between" p={2}>
              <Form.Field
                control={Select}
                name="section"
                options={sectionOptions}
                placeholder="Section"
                value={section}
                onChange={this.handleChange}
              />
              <Form.Field primary control={Button} onClick={this.handleSubmit}>
                Submit
              </Form.Field>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }
}

export default QuestionForm;
