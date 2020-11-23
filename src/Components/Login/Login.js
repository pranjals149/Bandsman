import React from "react";
import "./Login.css";
import { accessUrl } from "../../spotify";

function Login() {
  return (
    <div className="login">
        <h1>Bandsman</h1>      
        <img
            src="https://image.freepik.com/free-vector/happy-tiny-people-listening-spiritual-music_74855-5870.jpg"
            alt=""
        />
        <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;