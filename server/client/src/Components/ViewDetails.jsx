import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './ViewData.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../App';

function ViewDetails() {
    const [fullData, setFullData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { freelancer_id, name, user_id } = location.state || {};
    const [tokenDetails,setTokenDetails] = useContext(Store);

    useEffect(() => {
        if (!tokenDetails.token) {
            navigate("/login");
            return;
        }

        const fetchData = async () => {
            try {
                console.log(freelancer_id);
                const response = await axios.get(`http://localhost:5001/dashboard/freelancer/${freelancer_id}`, {
                    headers: {
                        Authorization: `Bearer ${tokenDetails.token}`,
                    },
                });
                console.log(response.data);

                setFullData(response.data);
               

                await axios.post("http://localhost:5001/dashboard/addFreelancerSeenStatus", {
                    user_id: user_id,
                    freelancer_id: freelancer_id,
                    name: name,
                    email: tokenDetails.email,
                }, {
                    headers: {
                        Authorization: `Bearer ${tokenDetails.token}`,
                    },
                });
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    alert("Please Login Again...");
                    setTokenDetails({
                        token:""
                      })
                    navigate("/login");
                } else {
                console.error("Error in fetching or posting data:", error);
                }
            }
        };

        fetchData();
    }, [freelancer_id,setTokenDetails, navigate, name, user_id, tokenDetails]);

    const handleBack = () => {
        navigate("/userDashboard", { state: { name: location.state.name, user_id: location.state.user_id } });
    };

    const handleContact = () => {
        const email = fullData.email; 
        window.location.href = `mailto:${email}`;
    };

    if (!tokenDetails.token) {
        return <div>Redirecting to Login...</div>;
    }
    console.log(fullData);
    const joinedYear = fullData.createdAt ? new Date(fullData.createdAt).getFullYear() : 'Loading...';


    return (
        <div className='total-container'>
            <div className='name-heading'>
                <h1>Freelancer Details</h1>
            </div>
            {fullData ? (
                <div className='details'>
                    <div className="profile-container">
                        <div className="profile-header">
                            <img src="data:image/png;base64,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" alt="Profile" className="profile-img" />
                            <div className="profile-info">
                                <h2>{fullData.name}</h2>
                                <p>{fullData.location}</p>
                                <p>${fullData.amount} /m - 100%</p>
                                {/* <button className="quote-button">Get a Quote</button>
                                <button className="favorites-button">Add to Favorites</button> */}
                            </div>
                        </div>
                        <div className="profile-stats">
                            <p>Success Rate: 100%</p>
                            <p>Member Since: {joinedYear}</p>
                        </div>
                        <div className="profile-description">
                            <h2>Overview</h2>
                            <h3>{fullData.description}</h3>
                        </div>
                        <div className="profile-skills">
                            <h3>Skills & Expertise</h3>
                            <ul>
                                {fullData.skills && fullData.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='d-flex justify-content-center m-2'>
                        <button className='btn btn-danger m-1' onClick={handleBack}>Back</button>
                        <button className='btn btn-primary m-1' onClick={handleContact}>Contact</button>
                        </div>
                    </div>
                    
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ViewDetails;
