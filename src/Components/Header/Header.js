import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Header extends Component {
  static PropTypes = {
    list: PropTypes.array,
    activeItem: PropTypes.string,
    handleItemClick: PropTypes.func,
    isLogin: PropTypes.bool,
    handleLogin: PropTypes.func,
  };
  static defaultProps = {
    list: [{ title: 'Q&A', to: '/' }, { title: 'code', to: '/code' }],
    activeItem: 'Q&A',
    handleItemClick: () => {},
    isLogin: false,
    handleLogin: () => {},
  };
  render() {
    const { list, activeItem, handleItemClick, isLogin, handleLogin } = this.props;
    return (
      <Menu tabular>
        {list.map(item => {
          return (
            <Menu.Item
              //   key={`${menuName + path + index}`}
              as={Link}
              to={item.to}
              name={item.title}
              active={activeItem === item.title}
              onClick={handleItemClick(item.title)}
            />
          );
        })}
        <Menu.Menu position="right">
          <Menu.Item name={isLogin ? 'logout' : 'login'} onClick={handleLogin} />
        </Menu.Menu>
      </Menu>
    );
  }
}
