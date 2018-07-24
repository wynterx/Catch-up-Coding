import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './Main';
import Header from './Components/Header';

const App = () => (
<<<<<<< HEAD
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/qa" component={GitList} />
      <Route path="/gitlist" component={GitList} />
    </div>
  </Router>
=======
  <div>
    <Main />
  </div>
>>>>>>> Poomchaio/master
);
export default App;
