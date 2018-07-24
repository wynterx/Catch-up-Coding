import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './Main';
import Header from './Components/Header';

import GitList from './Components/GitList';

const App = () => (
  <div>
    <Main />
  </div>
);
export default App;
