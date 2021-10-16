import React,{useEffect} from "react";
import "../../App.css";
import Sidebar from "./../body/Sidebar/Sidebar";
import Feed from "../Feeds/Feed";
import Widget from "./../Widget/Widget";
import Login from "./../Login/Login";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser, selectUser } from './../../features/counter/userSlice';
import firebase  from 'firebase/compat/app';
import TopNavBar from './../Header/TopNavBar';
function Home() {
  const users = useSelector(selectUser);
  console.log("users",users);
  
  if (users) {
      sessionStorage.setItem("user", JSON.stringify(users))
  }
  
  const dispatch = useDispatch()
useEffect(() => {
  firebase.auth().onAuthStateChanged((userAuth) => {
   if (userAuth) {
     //already login
     dispatch(loginUser({
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName,
     }))
   }
   else{
     // logout
     dispatch(logoutUser())
   }
  })

 
}, [])
  
  return (
    <div className="container">
      {!users? (
        <Login />
      ) : (
        <div className="">
          <div className="app__body">
            <div className="feed__container">
              <Sidebar></Sidebar>
            </div>
            <div className="feed__container__center">
              <Feed></Feed>
            </div>
            <div className="feed__container">
              <Widget></Widget>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Home;
