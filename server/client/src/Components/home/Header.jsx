import React, { useContext } from "react";
import "./Header.css";
import { Outlet, useNavigate } from "react-router-dom";

import { Store } from "../../App";

function Header() {
  const navigate = useNavigate();
  const [tokenDetails, setTokenDetails] = useContext(Store);
  console.log(tokenDetails);
  const signin = () => {
    navigate("/login");
  };

  const signup = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    setTokenDetails({
      token:"",
      email:""
    });
    console.log(tokenDetails)
    navigate("/");
  };

  const goHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        <div className="logo">
          <h1 onClick={goHome}>Freelancer</h1>
        </div>

        {tokenDetails.token !== "" ? (
          <div className="nav-links">
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="nav-links">
            <button className="btn1" onClick={signin}>
              Sign in
            </button>
            <button className="btn1" onClick={signup}>
              Sign Up
            </button>
          </div>
         )}
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
