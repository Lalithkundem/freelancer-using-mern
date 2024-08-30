import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Adddata.css';
import img from './images/homepage.png';
import { Store } from '../App';
import axios from 'axios';


function AddData() {
  const location = useLocation();
  const [tokenDetails,setTokenDetails] = useContext(Store);
  const navigate = useNavigate();
  const {user_id,email,name}=location.state || {};

  const [data, setData] = useState({
    user_id:user_id,
    email:email,
    name:name,
    description: "",
    amount: "",
    mobile: "",
    skills: [],
    experience: "",
    location:""
  });

  const [skill, setSkill] = useState("");

  useEffect(() => {
    if (!tokenDetails.token) {
      navigate("/login");
    }
  }, [tokenDetails, navigate]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  }

  const addSkill = () => {
    if (skill && !data.skills.includes(skill)) {
      setData({ ...data, skills: [...data.skills, skill] });
      setSkill("");
    }
  }

  const removeSkill = (skillToRemove) => {
    setData({ ...data, skills: data.skills.filter(skill => skill !== skillToRemove) });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/dashboard/addFreelancerDetails`, data, {
        headers: {
          Authorization: `Bearer ${tokenDetails.token}`,
        },
      });
      console.log(response.data);

      alert("Data added successfully");
      navigate("/fidashboard", { state: { name: name } });
    } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("Please Login Again...");
            setTokenDetails({
                token:""
              })
            navigate("/login");
        } else {
      console.log("Adding data error", error);
      alert("Failed to add data. Please try again.");
        }
    }
  }

  return (
    <div>
      {tokenDetails.token !== "" ? (
        <div className='total'>
          <div className='main-content'>
            <form onSubmit={handleSubmit}>
              <h1 className='head'>ADDING DATA</h1>
              <div className='firstOne'>
                <label htmlFor='experience'>Name: </label>
                <input
                  required
                  type='text'
                  name='name'
                  id='name'
                  onChange={handleChange}
                  value={data.name}
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='experience'>Email: </label>
                <input
                  required
                  type='email'
                  name='email'
                  id='email'
                  onChange={handleChange}
                  value={data.email}
                  disabled
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='mobile'>Mobile Number: </label>
                <input
                  required
                  type='text'
                  name='mobile'
                  id='mobile'
                  pattern="[789][0-9]{9}"
                  onChange={handleChange}
                  value={data.mobile}
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='description'>Description: </label>
                <textarea
                  required
                  name='description'
                  id='description'
                  onChange={handleChange}
                  value={data.description}
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='amount'>Amount($): </label>
                <input
                  required
                  type='number'
                  name='amount'
                  id='amount'
                  onChange={handleChange}
                  value={data.amount}
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='experience'>Experience: </label>
                <input
                  required
                  type='number'
                  name='experience'
                  id='experience'
                  onChange={handleChange}
                  value={data.experience}
                />
              </div>
              <div className='firstOne'>
                <label htmlFor='skills'>Skills: </label>
                <input
                  type='text'
                  name='skill'
                  id='skill'
                  onChange={handleSkillChange}
                  value={skill}
                />
                <button type='button' onClick={addSkill} className='buttonAdd'>Add</button>
                <div className='skills-list'>
                  {data.skills.map((skill, index) => (
                    <div key={index} className='skill-item'>
                      {skill} <button type='button' onClick={() => removeSkill(skill)} className='buttonAdd'>Remove</button>
                    </div>
                  ))}
                </div>
                <div className='firstOne'>
                <label htmlFor='location'>Location: </label>
                <input
                  required
                  type='text'
                  name='location'
                  id='location'
                  onChange={handleChange}
                  value={data.location}
                />
              </div>
              </div>
              <button className='submit-btn'>Submit</button>
            </form>
          </div>
          <div>
            <img src={img} alt="not working" id="data-page-img" />
          </div>
        </div>
      ) : (
        <div>Redirecting to Login...</div>
      )}
    </div>
  );
}

export default AddData;
