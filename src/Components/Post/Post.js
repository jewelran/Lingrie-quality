import React, { forwardRef } from "react";
import "./Post.css";
import { BsThreeDots } from "react-icons/bs";
import { FaThumbsUp,FaCommentDots,FaLongArrowAltRight,FaTelegramPlane } from "react-icons/fa";
import { selectUser } from './../../features/counter/userSlice';
import { useSelector } from 'react-redux';
const Post = forwardRef(({post} ,ref) => {
  console.log(post.users.email);
  const user = useSelector(selectUser)
  

  return (
  
          <div className="posts" ref = {ref}>
       <div className="post__header d-flex justify-content-between">
         <div className="post__headerLeft">
           <span className="fs-5">{post.users.displayName}</span>{" "}
           <span style={{ fontSize: "12px" }}>like this</span>
         </div>
         <div className="post__headerRight">
           <span className="fs-4">
             <BsThreeDots />
           </span>
         </div>
       </div>
 
       <div className="d-flex justify-content-between userLogo">
         <div className="d-flex ">
           <img
             src={post.users.photoURL}
             alt=""
           />
           <div className="profile__titleArea">
             <h5>{post.users.displayName}</h5>
             <small>Software Engineer at programming hero</small>
             <br />
             <small>time here</small>
           </div>
         </div>
         <div className="follow__Wrapper">
           <h4>+ Follow</h4>
         </div>
       </div>
       <div className="description">
         <p>
           {post.message}
         </p>
 
         <div className="post__img">
           <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-dezgMwaGlQs-eOVYQ5GnDqfCfYGxnqfQ&usqp=CAU"
             alt=""
           />
         </div>
         <div className="post__footer justify-content-evenly">
                 <div className="post__footer__icon">
                    <span className = "post__icon" style= {{fontSize: "20px",color: "#555",marginRight: "5px"}}><FaThumbsUp/></span> <span>like</span>
                 </div>
                 <div className="post__footer__icon">
                    <span className = "post__icon" style= {{fontSize: "20px",color: "#555",marginRight: "5px"}}><FaCommentDots/></span> <span>comment</span>
                 </div>
                 <div className="post__footer__icon">
                     <span className = "post__icon" style= {{fontSize: "20px",color: "#555",marginRight: "5px"}}><FaLongArrowAltRight/></span><span>Share</span>
                 </div>
                 <div className="post__footer__icon">
                     <span className = "post__icon" style= {{fontSize: "20px",color: "#555",marginRight: "5px"}}><FaTelegramPlane/></span><span>Send</span>
                 </div>
 
         </div>
       </div>
     </div> 
      
       
   
  )})

export default Post;
