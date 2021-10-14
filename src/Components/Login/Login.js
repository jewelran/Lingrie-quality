import React, { useContext , useState} from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "./../Login/firebase";
import "firebase/compat/auth";
// import { initializeApp } from "firebase/app";
import { userContext } from './../../App';
import { useHistory, useLocation } from "react-router";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../features/counter/userSlice";
import "./Login.css"
function Login() {
  const [users, setUsers] = useState(false)
  const [name, setName] = useState("")
  const [photoURL, setPhotoURL] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [conformPassword, setConformPassword] = useState("")
  console.log(
    users
  );
  const dispatch = useDispatch()
//   let history = useHistory();
//   let location = useLocation();
//   let { from } = location.state || { from: { pathname: "/" } };
//  const [loggedInUser, setLoggedInUser] = useContext(userContext)
   if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
       
   }
  // console.log("users",loggedInUser.user);
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleSingIn = () => {
    console.log("this is sing in");
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  };

const register = (e) => {
  e.preventDefault()
  if (!name) {
    return alert("name is required")
  }
  if (!email) {
    return alert("email is required")
  }
  if (!photoURL) {
    return alert("photo URL is required")
  }
  if (!password) {
    return alert("password is required")
  }
  if (!conformPassword) {
    return alert(" conform password is required")
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userAuth) => {
    // Signed in 
    userAuth.user.updateProfile({
      displayName:name,
      photoURL: photoURL,
    }).then(() => {
        dispatch(loginUser({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            photoURL: photoURL,
            displayName: name
        }))
    })
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error)
    // ..
  });

 setName("")
 setEmail("")
 setPhotoURL("")
 setPassWord("")
 setConformPassword("")
}
const signIn = (e) => { 
  e.preventDefault()
  if (!email) {
    return alert("email is required")
  }
  if (!password) {
    return alert("password is required")
  }
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    console.log(user);
    dispatch(loginUser({
      email: user.email,
      uid:  user.uid,
      photoURL:user.photoURL,
      displayName: user.displayName
  }))
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  setEmail("")
  setPassWord("")
}
  return (
    <div className = "container mt-4 ">
   
      <div className="container d-flex justify-content-center mt-5">
       <div className="loginForm ">
    
     {
         users === true ? (
           <form className="logInForm" onSubmit={signIn}>
             <h2 style={{color:"grey"}}>Login </h2>
             <input type="email" name="" id="" placeholder="Your email or phone" value = {email} onChange ={(e) => setEmail(e.target.value)}  />
        <br />
        <br />
        <input type="password" name="" id="" placeholder="password" value = {password} onChange ={(e) => setPassWord(e.target.value)}  />
        <br />
        <br />
        <input type="submit" value="Login" />
           </form>
         ) : (
           <form className="logInForm" onSubmit = {register}>
             <h2 style ={{color:"grey"}}>SingIn</h2>
           <input  type="text" name="" id="" placeholder="Your name" value = {name} onChange ={(e) => setName(e.target.value)} />
        <br />
        <br />
        <input type="email" name="" id="" placeholder="Your email or phone" value = {email} onChange ={(e) => setEmail(e.target.value)}  />
        <br />
        <br />
        <input type="link" name="" id="" placeholder="Photo URL" value = {photoURL} onChange ={(e) => setPhotoURL(e.target.value)}  />
        <br />
        <br />
        <input type="password" name="" id="" placeholder="password" value = {password} onChange ={(e) => setPassWord(e.target.value)}  />
        <br />
        <br />
        <input type="password" name="" id="" placeholder="conform password"value = {conformPassword} onChange ={(e) => setConformPassword(e.target.value)}  />
        <br />
        <br />
        <input type="submit" value="SingIn" />
           </form>
         )
       }

        
       
     
      {
        !users === true ? (
          <p style={{marginTop:"20px"}}>
          Already a member? <span style={{ cursor:"pointer",color:"tomato",fontWeight:"bold"}} onClick={() => setUsers(!users)}>Login Here</span>
       </p>
        ):(
          <p style= {{marginTop:"20px"}}>
          Not a member? <span style ={{color: "tomato", cursor:"pointer",fontWeight:"bold"}} onClick={() => setUsers(!users)}>Sing In</span>
       </p>
        )
      }
      
      
    <br />
    <br />
      <button className ="googleSingInBtn" onClick={() => googleSingIn()}>Google sing in</button>
       </div>
      </div>

      
    </div>
  );
}

export default Login;
