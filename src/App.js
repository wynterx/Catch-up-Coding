import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GitList from './Components/GitList';
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gitlist">Git List</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/gitlist" component={GitList} />
    </div>
  </Router>
);
export default App;
