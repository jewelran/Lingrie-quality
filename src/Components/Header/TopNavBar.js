import React from 'react'
import logo from "../../images/linkedin_logo.png";
import "./TopNavBar.css"
import search from "../../images/magnifying-glass.png"
import Navigation from '../Navigation/Navigation';
import { BiHomeAlt } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FcBusinessman,FcBusiness } from "react-icons/fc";
import { FiUsers } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/counter/userSlice';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function TopNavBar() {
  const user = useSelector(selectUser) 
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img style ={{width: "50px", height:"50px"}} src="http://knitconcern.com/wp-content/themes/knitconcern/images/logo2.png" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  justify-content-around" id="navbarNavDropdown">
      <ul class="navbar-nav" >
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to ="/home">
                <Navigation Icon = {FiUsers} title= "My Network"></Navigation>
        </Link>
        </li>
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to = "/department/quality">
                <Navigation Icon = {FcBusiness} title= "Quality Team"></Navigation>
                </Link>
        </li>
      
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to ="/notification">
                <Navigation Icon = {FaBell} title= "notifications"></Navigation>
                </Link>
        </li>
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to ="/home">
                <Navigation Icon = {FcBusiness} title= "Jobs"></Navigation>
                </Link>
        </li>
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to ="/defectAnalysis">
                <Navigation Icon = {FcBusiness} title= "Defect Analysis"></Navigation>
                </Link>
        </li>
        <li class="nav-item">
        <Link style ={{textDecoration: "none",fontWeight:"bold",textAlign:"center"}} to ="/login">
                <Navigation Icon = {FcBusiness} title= "Join Us"></Navigation>
                </Link>
        </li>
      
        
      </ul>
    
    <button className = "singOutBtn" onClick = {() => firebase.auth().signOut()}>
             <h5>{
                 user? "sing out" : "sign In"
                 }</h5>
         </button>
    </div>
   
  </div>
</nav>
    )
}

export default TopNavBar
