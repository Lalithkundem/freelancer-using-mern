import React, { useState, useContext } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from './config.js';
import image from "./images/home.jpg";
import { Store } from "../App.js";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [tokenDetails,setTokenDetails] = useContext(Store);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.apiUrl}/user/login`, {
        email: email,
        password: pass,
      });
      console.log(tokenDetails);
      const user = response.data;
      setTokenDetails({
        token: response.data.token,
        email: response.data.email,
      });
      toast.success(user.message, {
        position: "top-center",
        autoClose: 3000,
      });

      if (user.typeOfUser === "Freelancer") {
        navigate("/fidashboard",{state:{user_id:user.id,name:user.name}});
      } else if (user.typeOfUser === "User") {
        navigate("/userdashboard",{state:{name:user.name,user_id:user.id}});
      }else{
        toast.info("Please Register first..");
      }
    } catch (error) {
      console.error(error);
      toast.error("Runtime error", {
        position: "top-left",
        autoClose: 15000,
      });
    } 
  };

  return (
   
      <div className="loginfields">
        <img src={image} alt="not available" id="bg-ll"></img>

        <h1 className="login-heading mt-4">SIGN IN</h1>
        <form onSubmit={handleSubmit}>
          <div className="first">
            <label htmlFor="inputEmail3" className="form-label">
              Email
            </label>
            <div className="input1">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
          </div>
          <div className="second">
            <label htmlFor="inputPassword3" className="form-label">
              Password
            </label>
            <div className="input2">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                name="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                required
              />
            </div>
          </div>
          <button type="submit" className="signin-btn">
            Sign in
          </button>
        </form>
        <div className="link-to">
          Don't have an account?Click here to{" "}
          <Link to="/register">register</Link>
        </div>
        <ToastContainer />
      </div>
  
  );
}

export default Login;
