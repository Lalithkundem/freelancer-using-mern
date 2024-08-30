import React, { useContext, useEffect } from 'react';
import './FIDashboard.css';
import image from './images/dashboardimage.jpg';
import { useNavigate ,useLocation} from 'react-router-dom';
import { Store } from '../App';


function FreelancerDashboard() {

    const [tokenDetails]=useContext(Store);
    const navigate=useNavigate();
    const location=useLocation();
   
    const handleClick=()=>{
            navigate("/addData",{state:{user_id:location.state.user_id,name:location.state.name}});
    }
    const handleStatus=()=>{
        navigate("/viewStatus",{state:{user_id:location.state.user_id}});
    }

    useEffect(()=>{
        if(!tokenDetails.token){
            navigate("/login");
        }
       
    },[tokenDetails,navigate]);


    return ( 
        <div>
        {tokenDetails.token !=="" ?(
        <div>
            
            <img src={image} alt="not available" id='bg-image'></img>
            <div className='welcomemsg'>
                <h1>Welcome to Freelancer Website<br></br> Hello {location.state.name}</h1>
            </div>
            <div className='cards'>
                <div className='dataEntryCard' onClick={handleClick}>
                    <h1>Add Data</h1>

                </div>
                <div className='viewedCard' onClick={handleStatus}>
                    <h1>View Status</h1>
                </div>
                
            </div>
       
        </div>
    ):(<div>Redirecting to Login...</div>)}
    </div>
     );
}

export default FreelancerDashboard;