import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({component: Component, ...routeProps}) => {

  // const { email, username, token } = useSelector(state => state.userStore.user);
  const userToken = localStorage.getItem('token_id');

  if (userToken) {
    return <Route {...routeProps} render={props => <Component {...props} />} />
  } else {
    return <Redirect to="/login"/>
  }
}

export default ProtectedRoute