import React from "react";
import { useState } from "react";
import "../components/login.css";
import {useDispatch, useSelector } from "react-redux";
import { login,logout } from "../Redux/action";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch=useDispatch(); 
  const isLoggedin=useSelector(state => state.isLoggedin)
  let [user,setUser]=useState("");
  const Navigate=useNavigate();
  const loginUser = async () => {
    //console.log(`Email: ${email} PassWord: ${password}`)
    const options = {
      method: "POST",
      url: "https://apistaging.icommunify.com/api/v1/user/login",
      headers: {
        "accept": "application/json, text/plain",
        "Content-Type": "application/json",
        "authorization":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGQ5ZGNkNGYwNDYwMTcxNmIyNzE3ZTAiLCJyb2xlIjoiU3R1ZGVudCIsImZpcnN0TmFtZSI6IlRhcmFuamVldCIsImRldmljZV90eXBlIjoiMCIsImlhdCI6MTY5NjE1MDAwOH0.jMigFgl31w2ava_5taw4idA_s_7YBrpS2zMZ9OuNNiI",
      },
      body: `{\"username\":\"${email}\",\"password\":\"${password}\",\"device_token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJjMWNhYTMzMWI0ZmE3ZTQyZmJhYmUiLCJyb2xlIjoiU3VwZXJBZG1pbiIsInBob25lTnVtYmVyIjoiIiwiaWF0IjoxNjkwMzUyNTgxLCJleHAiOjE2OTA1MjUzODF9.Ftbr2-HrrpxVdJoJJVJN8M41v7RDMTQGcB4ZM1Qblrg\",\"device_type\":0}`
    };
    
    fetch('https://apistaging.icommunify.com/api/v1/user/login', options)
    .then(response => response.json())
    .then((response)=>{
      console.log(response)
      let data=response.data;
      console.log(data);
      dispatch(login(data.username,data.password,data.firstName,data.lastName,data.role))
      setUser(data.firstName)
      Navigate("/signup")
    })
    .catch(()=>alert("INVALID DETAILS"));
  };
  
  return (
    <div className="form">
      <h1>Login Here</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>User Name</label>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isLoggedin && <span> <br></br>Heyy welcome <b>{user}</b> </span>}
        {!isLoggedin && <button onClick={loginUser}>Login</button>}
      </form>
    </div>
  );
};

export default Login;
