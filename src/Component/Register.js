import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
function Register() {
  const name = useRef();
  const password = useRef();
  const email = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSign = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  useEffect(() => {
    if (localSign) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  function RegisterIn(e) {
    e.preventDefault();
    if (name.current.value && email.current.value && password.current.value) {
      console.log(name.current.value);
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Sign up done");
      window.location.reload();
    }
  }

  const SignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid values");
    }
  };
  return (
    <div>
      {showHome ? (
        <Home />
      ) : //if the person wants to login again after logout than
      //below container will be shown
      show ? (
        <div className="container">
          <h1>Login {localName}</h1>
          <div>
            <label>Email</label>
            <input type="email" ref={email} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={password} />
          </div>
          <button onClick={SignIn}>Sign In</button>
        </div>
      ) : (
        <div className="container">
          <div>
            <label>Username</label>
            <input type="text" ref={name} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" ref={email} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={password} />
          </div>
          <button onClick={RegisterIn}>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Register;
