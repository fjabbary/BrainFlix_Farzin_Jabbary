import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main';
import Upload from './components/Upload';

export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/upload" component={Upload} />
            <Route path="/:id" component={Main} />
          </Switch>
        </div>

      </Router>
    )
  }
}
