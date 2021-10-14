import React , {useState, useEffect} from "react";
import "./Feed.css";
import { FcPicture, FcClapperboard, FcKindle, FcPlanner } from "react-icons/fc";
import Post from "../Post/Post";
import firebase from "firebase/compat/app";
import { selectUser } from './../../features/counter/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from "react-flip-move";

function Feed() {
  
  const user = useSelector(selectUser)
 
const [input, setInput] = useState()
const [posts , setPosts] = useState([])
console.log(posts);
const reverse =  posts.reverse();
const [defaultState, setDefaultState] = useState([])
console.log(defaultState);
console.log(reverse);
console.log(posts);
 
useEffect(() => {
  fetch("http://localhost:5000/allPosts")
  .then(res => res.json())
  .then(data => setPosts(data.reverse()))
  
}, [])
 function reloadPage () {
 window.location.reload(false)
}
  const submitPost = (e) => {

    fetch('http://localhost:5000/posts',{
      method : 'POST',
      headers: {"content-type": "application/json"}, 
      body: JSON.stringify({message:input, users:user})
    }).then(response => {
      console.log("data inserted in mongodb",response);
     
   
        
   
    })
    
      window.location.reload(false)
  
    setInput("")
    e.preventDefault()
  }
 
  return (
    <div className="feed">
      <div className="feed__input d-flex align-item-center  bg-white rounded-top p-3">
        <img
          style= {{width: "50px" , height: "50px"}}
          className="rounded-circle"
          src={user.photoURL}
          alt=""
        />
        <div className="align-item-center " style={{ margin: "auto 0" }}>
          <form onSubmit = {submitPost} action=" " className="d-flex">
            <input
            value= {input}
            onChange = {e => setInput(e.target.value)}
              className="rounded-pill   border"
              style={{
                width: "27rem",
                marginLeft: "20px",
                padding: "10px 10px",
              }}
              type="text"
              name=""
              id=""
              placeholder="Start a post"
            />
            <input
              className="rounded-pill fs-5  border"
              style={{ width: "20%", marginLeft: "20px", padding: "10px 10px" }}
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
      <div className="feet__options rounded-bottom bg-white p-3">
        <div className="option d-flex justify-content-evenly">
          <span className="fs-2 icon" style={{ lineHeight: "10px" }}>
            {" "}
            <FcPicture /> <span style={{ fontSize: "15px" }}>Image</span>
          </span>

          <span className="fs-2 icon" style={{ lineHeight: "10px" }}>
            {" "}
            <FcClapperboard />   <span style={{ fontSize: "15px" }}>Video</span>
          </span>

          <span className="fs-2 icon" style={{ lineHeight: "10px" }}>
            {" "}
            <FcKindle />   <span style={{ fontSize: "15px" }}>Event</span>
          </span>

          <span className="fs-2 icon" style={{ lineHeight: "10px" }}>
            {" "}
            <FcPlanner />   <span style={{ fontSize: "15px" }}>Write article</span>
          </span>
        </div>
      </div>

      <div className="mt-3">
      <FlipMove>
      {
          posts.map(post => <Post  post = {post}></Post>)
        }
      </FlipMove>
       
      
      </div>
    </div>
  );
}

export default Feed;
