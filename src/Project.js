import React, { Component } from 'react'
import CoinList from './components/CoinList';
import CoinDetail from './components/CoinDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from './HOC/ProtectedRoute';
import Login from './components/Login';



export default class Project extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/" component={CoinList}  exact/>
          {/* <Route path="/coins/:coinId"> 
            <CoinDetail />
          </Route> */}
          <ProtectedRoute component={CoinDetail} path="/coins/:coinId"/>
        </Switch>
      </Router>
    )
  }
}
