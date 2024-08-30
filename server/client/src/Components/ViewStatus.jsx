import axios from 'axios';
import React, {  useState, useEffect, useContext } from 'react';
import { Store } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';


function ViewStatus() {
    const [viewData, setViewData] = useState([]);
    const location=useLocation();
    const navigate=useNavigate();
   
    const [tokenDetails,setTokenDetails]=useContext(Store);
    const {user_id}=location.state || {};
   
   

    useEffect(() => {
        if(!tokenDetails.token){
            navigate("/login");
        }

        const fetchData = async (tokenDetails,user_id) => {
            console.log(user_id);
            try {
                console.log("user is:",user_id);
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard/status/${user_id}`,
                    {
                        headers: {
                          Authorization: `Bearer ${tokenDetails.token}`,
                        },
                      }
                );
                
                setViewData(response.data);
              
                
               
            } catch(error) {
                if (error.response && error.response.status === 401) {
                    alert("Please Login Again...");
                    setTokenDetails({
                        token:""
                      })
                    navigate("/login");
                } else {
                console.log("viewStatus API error", error);
                }
            }
        };
        fetchData(tokenDetails,user_id);
        
    }, [tokenDetails,setTokenDetails,navigate,user_id]);

    console.log("responsed data",viewData);

    return (
        <div>
        {tokenDetails.token !=="" ?(
        <div>
            <div className='container'>
                
                
                    <h1>VIEW STATUS</h1>
                
                <div className='row'>
                    
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>S.NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Viewed At</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                        {viewData && viewData.length > 0 ? (
                        viewData.map((view, index) => (
                            <tr key={view._id }>
                                <td>{index+1}</td>
                                <td>{view.name}</td>
                                <td>{view.email}</td>
                                <td>{view.viewedAt}</td>
                               
                            </tr>
                    
                        
                           
                         ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )} 
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        ):(<div>Redirecting to Login...</div>)}
    </div>
    );
}

export default ViewStatus;
