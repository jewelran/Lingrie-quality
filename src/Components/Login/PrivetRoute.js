import React, {  useContext } from 'react'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
import { userContext } from './../../App';

function PrivetRoute({children, ...rest}) {
    const [loggedInUser, setLoggedInUser]  = useContext(userContext)
    return (
        <div>
             <Route
      {...rest}
      render={({ location }) =>
      loggedInUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    )
}

export default PrivetRoute
