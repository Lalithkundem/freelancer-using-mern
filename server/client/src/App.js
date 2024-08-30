import Header from "./Components/home/Header.jsx";
import SectionOne from "./Components/home/SectionOne.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import FreelancerDashboard from "./Components/FlDashboard.jsx";
import AddData from "./Components/Adddata.jsx";
import { useState, createContext } from "react";
import UserDashboard from "./Components/UserDashboard.jsx";
import ViewDetails from "./Components/ViewDetails.jsx";
import LoginError from "./Components/NoPage.jsx";
import ViewStatus from "./Components/ViewStatus.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

export const Store=createContext();

function App() {
  const [tokenDetails,setTokenDetails]=useState({
    token:"",
    name:""
  });

  return (
    <Store.Provider value={[tokenDetails,setTokenDetails]}>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<SectionOne />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/fidashboard" element={<FreelancerDashboard />} />
            <Route path="/addData" element={<AddData />} />
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/viewData" element={<ViewDetails />} />
            <Route path="/viewStatus" element={<ViewStatus />} />
            
          </Route>
          <Route path="*" element={<LoginError/>}/>
        </Routes>
      </Router>
   </Store.Provider>
  );
}

export default App;
