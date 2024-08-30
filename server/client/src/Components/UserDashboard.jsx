import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./UserDashboard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "../App";
import config from './config.js';

function UserDashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [datas, setDatas] = useState([]);
  const location = useLocation();
  const [tokenDetails,setTokenDetails] = useContext(Store);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenDetails.token === "") {
      navigate("/login");
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${config.apiUrl}/dashboard/allFreelancers`,
          {
            headers: {
              Authorization: `Bearer ${tokenDetails.token}`,
            },
          }
        );
        setDatas(res.data);
        // if(res.status===401){
        //   alert("please login again..")
        //   navigate("/login");
        // }
       
      } catch (error) {
        console.log("error status",error.response.data.message);
        if (error.response && error.response.statusText === "Unauthorized") {
          alert("Please Login Again...");
          setTokenDetails({
            token:""
          })
          navigate("/login");
      } else {
        console.log("fetching data error", error);
      }
      }
    };

   fetchData();
  }, [tokenDetails,setTokenDetails, navigate]);

  const handleClick = (id) => {
    navigate("/viewData", {
      state: { freelancer_id: id, name: location.state.name, user_id: location.state.user_id },
    });
  };

  console.log(datas);
  return (
    <div>
      {tokenDetails.token !== "" ? (
       
          <div className="main">
            <div className="welcomemsgs text-left m-4">
              <h1 className="m-4">
                Welcome to Freelancer Website <br />
                Hello {location.state.name}
              </h1>
            </div>
            <h2>Search for Freelancer</h2>
            <div className="search-field">
              <div className="search-area">
                <input
                  type="search"
                  placeholder="Search skills..."
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div className="search-icon">
                <FaSearch />
              </div>
            </div>
            <div className="data">
              {datas &&
                datas
                  .filter((d) =>
                    d.skills.some((skill) =>
                      skill.toLowerCase().includes(searchInput.toLowerCase())
                    )
                  )
                  .map((d) => (
                    <div
                      className="card-holder"
                      onClick={() => handleClick(d.user_id)}
                      key={d.user_id}
                    >
                      <div className="card-header">
                        <h1>{d.skills[0]}</h1>
                      </div>
                      <div className="card-container">
                        <p>Exp: {d.experience} years</p>
                      </div>
                    </div>
                  ))}
            </div>
          
        </div>
      ) : (
        <div>Redirecting to Login...</div>
      )}
    </div>
  );
}

export default UserDashboard;
