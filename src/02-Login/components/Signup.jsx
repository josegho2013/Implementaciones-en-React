import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";

const Login = () => {
    return (
      <div>
        <form className="form">
          <h1>Signup</h1>
          <div>
            <div>
              <label>User Name</label>
            </div>
            <input className="input" type="text" />
          </div>
          <div>
            <label> Email</label> 
          </div>
          <div>
            <input type="password" className="input" />
          </div>
          <div>
            <div>
              <label>Password </label>
            </div>
            <input className="input" type="text" />
          </div>
          <div>
            <label> Confirm Password</label>
          </div>
          <div>
            <input type="password" className="input" />
          </div>
          <div>
            
          
            <button className="button-add">Login</button>
            
          </div>
          <Link to="/Login">
          <button >Home</button>
          </Link>
          <div>
            <p>Start Section With</p>
          </div>
          <div className="icon">
            <Link to="/google.com">
            <button>
              {" "}
              <FcGoogle className="google" />{" "}
            </button>
           </Link>
            <button>
              {" "}
              <AiFillFacebook className="face" />
            </button>
            <button>
              {" "}
              <AiFillApple className="app" />
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;