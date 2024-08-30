import React,{useState} from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate,Link } from 'react-router-dom';
import image from './images/home.jpg';

function Register() {
    const [datas,setDatas] =useState({
        name:"",
        email:"",
        typeOfUser:"",
        password:""
});
const navigate=useNavigate();

    const handleChange=(e)=>{
        console.log(datas);
        setDatas({...datas,[e.target.name]:e.target.value});

    }

    const handleSubmit=async(e)=>{
        console.log(datas);
        e.preventDefault();
        try{
            const response=await axios.post("http://localhost:5001/user/register",datas);
            console.log(response.data);
            alert(response.data.message);

           if(response.data.message==="User Registered Successfully"){
            navigate("/login");
           }
            
        }catch(error){
            console.log(error);
        }

    }

    return ( 
        <div className='cc'>
            <img src={image} alt="not available" id='bg-rr'></img>
            
            <div className='container1 '>
                <h1 className='heading mt-4'>SIGN UP</h1>
                <div className='first'>
                    <label htmlFor='name' >Name</label>
                    <div className='input1'>
                        <input
                           type='text'
                           placeholder='Enter Your Name'
                           required
                           value={datas.name}
                           onChange={handleChange}
                           
                           name='name' 
                           id='name'/>

                    </div>
                </div>
                <div className='second'>
                    <label htmlFor='email' >Email</label>
                    <div className='input2'>
                        <input
                           type='email'
                           placeholder='Enter Your Email'
                           required
                           value={datas.email}
                           onChange={handleChange}
                          
                           name='email' 
                           id='email'/>

                    </div>
                </div>
                <div className='third'>
                    <label htmlFor='typeOfUser' >User Type</label>
                    <select  onChange={handleChange} name='typeOfUser' value={datas.typeOfUser} id='typeOfUser' required>
                        <option>Select Type</option>
                        <option>Freelancer</option>
                        <option>User</option>
                    </select>
                </div>
                <div className='fourth'>
                    <label htmlFor='pass' >Password</label>
                    <div className='input3'>
                        <input
                           type='password'
                           placeholder='Enter Your Password'
                           required
                           onChange={handleChange}
                           value={datas.password}
                           name='password' 
                           id='pass'/>

                    </div>
                </div>
                <button type='submit' className='registerbtn' onClick={handleSubmit}>Submit</button>
                <div className="link-to">
          Already Registered?
          <Link to="/login">Please Login</Link>
        </div>
            </div>
        </div>
     );
}

export default Register;