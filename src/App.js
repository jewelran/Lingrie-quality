import React, { createContext } from 'react'
import Home from './Components/Home/Home'
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import { useState } from 'react';
import Notification from './Components/Notification/Notification';
import DefectsAnalysis from './Components/DefectsAnalysis/DefectsAnalysis';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path= "/login">
          <Login/>
          </Route>
          <Route exact path= "/">
          <Home/>
          </Route>
          <Route  path= "/home">
          <Home/>
          </Route>
         <Route path= "/notification">
           <Notification></Notification>
         </Route>
         <Route path= "/defectAnalysis">
           <DefectsAnalysis></DefectsAnalysis>
         </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  )
}

export default App

