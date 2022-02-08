import "./LoginSignup.css";

import { Link, useNavigate } from "react-router-dom";

import { auth } from "../Signup/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';
import { useState } from "react";

const Login = () => {
 
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
 
    const navigate = useNavigate();

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
        

          swal({
            title:"login Successfully Click Okay To Explore Site",
            text:"",
            icon:"success",
            button:"Okay"
          }).then(function(){return navigate("/home")});  
          
        } catch (error) {
          swal({
            title:"User Not Found",
            text:"Please Signup",
            icon:"error",
            button:"Okay"
          }).then(function(){return (setLoginEmail(""),
          setLoginPassword("") ,navigate("/"))})
        }
};

 
 return (<div className="loginabc">
  
  
  
  <div className="container">
      <div className="form1">

        <div className="ui form">
          <h1>Login </h1>

          <div className="ui divider"></div>

          <div className="field">
            <input
            type="email"
            value={loginEmail}
              placeholder="Email..."
              autoComplete="on"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            </div>
            <div className="field">
          <input
           type="password"
           value={loginPassword}
            placeholder="Password..."
            autoComplete="on"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          </div>

          <button className="fluid ui button" style={{backgroundColor:"#DD4A48",width: "130px",margin: "auto",color:"white"}} onClick={login}> Login</button>
       
          <div className="ui divider"></div>
            <div>
              Don't have an account?<Link style={{color:"#548CFF"}} to="/signup">Sign Up</Link>
            </div>

       
        </div>
        </div>
        
      
     

    </div>
    </div>
  );
  
  
  
  
  
  
  
};

export default Login;
