import React from "react";
import "./Login.css";
import { accessUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
      <h1>Bandsman</h1>
      <img
        src="https://cdn.pixabay.com/photo/2021/10/25/14/44/confused-6741161_960_720.png"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;