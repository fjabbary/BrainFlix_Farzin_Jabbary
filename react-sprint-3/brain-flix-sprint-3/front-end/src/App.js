import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Main from './Main';
import Upload from './components/Upload';
import Header from './components/Header';
import axios from 'axios';
import ShowSearch from './components/ShowSearch';

class App extends Component {

  state = {
    foundObj: {}
  }

  searchHandler = (e) => {
    const searchStr = e.target.value;

    //Triggers post request only if enter key is pressed on search input
    if (e.keyCode === 13) {
      axios.post('http://localhost:8080/search', {
        search: searchStr
      }).then(res => {
        this.setState({
          foundObj: res.data
        })
      })

      this.props.history.push('/showSearch')
    }
  }

  render() {
    return (
      <div>
        <Header search={this.searchHandler} />
        <Switch>
          <Redirect from="/" to="/1af0jruup5gu" exact component={Main} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/showSearch" render={() => { return <ShowSearch {...this.state.foundObj} /> }} />
          <Route path="/:id" component={Main} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);