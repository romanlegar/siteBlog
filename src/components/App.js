import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './componentsHome/Home';
import Page from './componentsPage/Page';
import AdminPanel from './componentsAdmin/AdminPanel';
import { Switch, Route, Link, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/post/:name'component={Page} />
        <Route exact path='/admin'component={AdminPanel} />
        <Route render ={ ()=>(
          <div>
            EROR 404
          </div>
        )}/>
      </Switch>
    )
  }
}

export default App;
