import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    localStorage.setItem("authenticated", true);
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      });
      const userAuth = response.data;
      if (userAuth.message === "success") {
        const atuhenticated = JSON.stringify(userAuth.user);
        localStorage.setItem("atuhenticated", atuhenticated);
        alert("login success");
        navigate("/calculator");
      } else {
        console.log("incorect login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="box-login">
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name=""
          id=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
