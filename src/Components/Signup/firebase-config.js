import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD6mOJ5vCXSqOwE_xHJqg5V3Ub43NwjFjE",
    authDomain: "authentication-login-abd57.firebaseapp.com",
    projectId: "authentication-login-abd57",
    storageBucket: "authentication-login-abd57.appspot.com",
    messagingSenderId: "974372013498",
    appId: "1:974372013498:web:6955eac3e93d6d9bdb4983",
    measurementId: "G-LF9N7Z3JZF"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);