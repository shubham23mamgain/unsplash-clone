import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__left">
          <div className="login__logo">
        <img
          className="image__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAAD39/eVlZVhYWHt7e2YmJisrKydnZ3AwMAuLi7V1dWoqKibm5v09PSQkJB1dXUdHR1aWlrVATWbAAABDklEQVR4nO3ZSxaCMAxAUUUFFfG3/8U6t5OAVVLPvQvIyeuw2WwAAAAAAAAAAAAAAELG/hjVj2svu8hlG3dZe9lFhhmFw9rLLqJQYX4KFeanUGF+ChXmp1BhfgoV5qdQYX4KFeanUGF+Ctsv/P/r2jiFL6RTmxdSAAAAIL3rIeC65sAPdbfI79JuxsRdZOCt+1rRuy60UD9jYh96MoX1KFRYUqiwNoUKSwoV1qZQYUmhwtoUKiwpVFibQoUlhQprU6iw1GbhNGPi1GTh/RR3b7LwcY57NFlYnUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFLRYOz/3vPYffFQIAAAAAAAAAAAAAAPyxF6hYLRF9pu91AAAAAElFTkSuQmCC"
          alt="Unsplash"
        />
      </div>
      

      <Button onClick={signin}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;
