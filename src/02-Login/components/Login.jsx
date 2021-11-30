import React from "react";
import "../css/login.css";
import { FcGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div>
      <form className="form">
        <h1>Login</h1>
        <div>
          <div>
            <label> Email</label>
          </div>
          <input
          className="input"
          type="text" />
        </div>
        <div>
          <label> Password</label>
        </div>
        <div>
        <input type="password"
        className="input" />
        </div>
        <div>
          <button className="button-add">Login</button>
        </div>

        <div>
            <p>Start Section With</p>
        </div>
        <div>
            <p> </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
