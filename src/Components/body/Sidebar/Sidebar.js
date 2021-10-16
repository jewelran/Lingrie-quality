import React from 'react'
import "./Sidebar.css"
import { selectUser } from './../../../features/counter/userSlice';
import { useSelector } from 'react-redux';
function Sidebar() {
  
    const user = useSelector(selectUser)
   console.log(user);
    return (
        <div  className= "sidebar">
            <div className="sidebar__profile">
                <img src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg" alt="" />
                <div className="profile__details">
                    <img src= {user.photoURL} alt="" />
                   <div className="title">
                   <h4>{user.displayName}</h4>
                    <p>a front end Web developer</p>
                   </div>
                  <div className="profile__stats">
                      <span>Who viewed your profile</span> <span className="stat__number">50</span>
                    <br />
                      <span style ={{marginRight:"100px"}}>Connection </span><br />
                      <span><b><b>Grow Your network</b></b></span> 
                       <span className="stat__number">150</span>
                  </div>
                </div>
            </div>
            <div className="side__resent">
                <p>Recent</p>
                <p className="hash"><span>#</span>branding</p>
                <p className="hash"><span>#</span>marketing</p>
                <p className="hash"><span>#</span>web development</p>
                <p className="hash"><span>#</span>programming</p>
                <p className="hash"><span>#</span>react js</p>
                <p className="hash"><span>#</span>reduxReact</p>
            </div>
        </div>
    )
}

export default Sidebar
