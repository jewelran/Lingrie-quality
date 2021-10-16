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
import QualityTeams from './Components/Teams/QualityTeams/QualityTeams';
import Productions from './Components/Teams/Production/Productions';
import Management from './Components/Teams/Management/Management';
import TopNavBar from './Components/Header/TopNavBar';
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
       <div className="container">
       <TopNavBar></TopNavBar>
       </div>
        <Switch>
          <Route path= "/login">
          <Login/>
          </Route>
          <Route exact path= "/">
          <QualityTeams/>
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
         <Route path ="/department/management">
           <Management></Management>
         </Route>
         <Route path ="/department/quality">
           <QualityTeams></QualityTeams>
         </Route>
         <Route path ="/department/production">
           <Productions></Productions>
         </Route>
        
        </Switch>
      </Router>
    </userContext.Provider>
  )
}

export default App

