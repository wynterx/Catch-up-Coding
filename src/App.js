import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GitList from './Components/GitList';
import Home from './Views/Home';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/qa" component={GitList} />
      <Route path="/gitlist" component={GitList} />
    </div>
  </Router>
);
export default App;
