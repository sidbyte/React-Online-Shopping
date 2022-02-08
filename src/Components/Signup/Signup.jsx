import "../Login/LoginSignup.css"

import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "./firebase-config";
import swal from 'sweetalert';
import { useState } from "react";

const Signup = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");

    
    const navigate = useNavigate();

    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          
          console.log(user);
          
          swal({
            title:"Sign up Successfully",
            text:"Now you can login",
            icon:"success",
            button:"Okay"
          }).then(function(){return navigate("/")})
    
    
          
    
        } 
        catch (error) 
        {
          setErrorShow(error.message.slice(9));
          console.log(errorShow);
          swal({
            title:"User Already Exist",
            text:"",
            icon:"error",
            button:"Okay"
          }).then(function(){return (setRegisterEmail(""),
          setRegisterPassword(""))})
    
        }
      };

      const handleGoogleSignin=()=>{
        const googleauthprovider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleauthprovider)
        .then((response)=>console.log(response))
        .catch((errors)=>console.log(errors))
      }

  return (<div className="loginabc">
  

  <div className="container">
      <div className="form1">
      
        <div className="ui form">
          
          <h1>SignUp </h1>
         
          <div className="ui divider"></div>
          <div className="field">
            <input
            type="email"
            value={registerEmail}
              placeholder="Email..."
              autoComplete="on"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>

          <div className="field">
            <input
            type="password"
            value={registerPassword}
              placeholder="Password..."
              autoComplete="on"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>

          <button className="fluid ui button" style={{backgroundColor:"#DD4A48",width: "234px",margin: "auto",color:"white"}} onClick={register}>SignUp </button>
          
          <div className="ui horizontal divider">
                Or
            </div>
          <button className="fluid ui button" style={{backgroundColor:"#DD4A48",width: "234px",margin: "auto",color:"white" ,marginTop:"8px"}} onClick={handleGoogleSignin}>Sign in with google</button>
         </div>

         <div className="ui divider"></div>
            <div>
              Do you've an account?<Link style={{color:"#548CFF"}} to="/">Login</Link>
             
            </div>
        </div>
        
      
    </div>
  
  
  
  
  </div>);
};

export default Signup;
