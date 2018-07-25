import React, { Component } from 'react';
import { Button, Form, Radio, Select, TextArea, Icon } from 'semantic-ui-react';
import { Flex, Box, Image, Circle, Input, Border, Checkbox, Label } from 'rebass';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

class QuestionFilter extends Component {
  static PropTypes = {
    handleFilter: PropTypes.func,
    sections: PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.number,
    }),
    keyword: PropTypes.string,
  };

  static defaultProps = {
    handleFilter: () => {},
    sections: [],
    keyword: '',
  };

  state = { postByUser: false, section: 0, keyword: '' };

  handleChange = (e, { name, value, type }) => {
    if (name === 'postByUser') {
      this.setState({ [name]: !value });
    } else {
      this.setState({ [name]: value });
    }
  };
  render() {
    const { postByUser, section, keyword } = this.state;
    const { sections, handleFilter } = this.props;
    console.log(sections);
    return (
      <Flex mx={2} p={2} justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={1} align="center" p={2}>
          <Text fontSize="24px" fontWeight="800">
            Filter
          </Text>
        </Box>
        <Form>
          <Box width={1} p={2}>
            <Form.Input
              label="Keyword"
              name="keyword"
              placeholder="Keyword"
              value={keyword}
              icon={
                keyword
                  ? {
                      name: 'close',
                      link: true,
                      onClick: () => {
                        this.setState({ keyword: '' });
                      },
                    }
                  : {}
              }
              onChange={this.handleChange}
            />
          </Box>
          <Box width={1} p={2}>
            <Form.Field
              control={Select}
              label="Section"
              name="section"
              options={sections}
              placeholder="Section"
              value={section}
              onChange={this.handleChange}
            />
          </Box>
          <Box width={1} p={2}>
            <Form.Checkbox
              label="Post by me"
              name="postByUser"
              onChange={this.handleChange}
              value={postByUser}
            />
          </Box>

          <Box width={1} align="center" p={2}>
            <Button
              content="Filter"
              icon="search"
              labelPosition="right"
              onClick={() => handleFilter(this.state)}
            />
          </Box>
        </Form>
      </Flex>
    );
  }
}

export default QuestionFilter;
