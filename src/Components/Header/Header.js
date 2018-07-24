import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
export default class Header extends Component {
  static PropTypes = {
    list: PropTypes.array,
    isLogin: PropTypes.bool,
  };
  static defaultProps = {
    list: [{ name: 'Q&A', to: '/main/qa' }, { name: 'code', to: '/main/code' }],
    isLogin: true,
  };

  state = {
    activeItem: 'Q&A',
    redirect: false,
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogin = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { list, isLogin } = this.props;
    const { activeItem, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Menu tabular>
        {list.map(item => {
          return (
            <Menu.Item
              key={item.name}
              as={Link}
              to={item.to}
              name={item.name}
              active={activeItem === item.name}
              onClick={this.handleItemClick}
            />
          );
        })}
        <Menu.Menu position="right">
          <Menu.Item name={isLogin ? 'logout' : 'login'} onClick={this.handleLogin} />
        </Menu.Menu>
      </Menu>
    );
  }
}
