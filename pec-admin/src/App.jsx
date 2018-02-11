import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';

import Workspace from './components/workspace/Workspace';
import UserPage from './components/user/UserPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Workspace>
            <Route exact path="/" component={UserPage} />
          </Workspace>
        </Router>
      </div>
    );
  }
}

export default App;
