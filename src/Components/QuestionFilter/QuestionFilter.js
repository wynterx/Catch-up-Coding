import React, { Component } from 'react';
import { Button, Checkbox, Form, Radio, Select, TextArea } from 'semantic-ui-react';
import { Flex, Box, Image, Circle, Input } from 'rebass';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

class QuestionFilter extends Component {
  static PropTypes = {
    handleFilter: PropTypes.func,
    sections: PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string,
    }),
  };

  static defaultProps = {
    handleFilter: () => {},
    sections: [],
  };

  state = { postByUser: false, section: '', sortBy: 'Likes' };

  handleChange = (e, { name, value }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { handleFilter } = this.props;
    const copyState = this.state;
    this.setState({ postByUser: false, section: '', sortBy: 'Likes' });
    handleFilter(copyState);
  };
  render() {
    const { postByUser, section, sortBy } = this.state;
    const { sections } = this.props;
    return (
      <Flex
        m={2}
        p={4}
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        flexDirection="column"
        bg="pink"
      >
        <Text>Filter</Text>
        <Form>
          <Form.Field
            control={Select}
            name="section"
            options={sections}
            placeholder="Section"
            value={section}
            onChange={this.handleChange}
          />

          <Form.Field primary control={Button} onClick={this.handleSubmit}>
            Submit
          </Form.Field>
        </Form>
      </Flex>
    );
  }
}

export default QuestionFilter;
