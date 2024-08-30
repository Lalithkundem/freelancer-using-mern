import React from 'react';
import './SectionOne.css';
import SectionTwo from './SectionTwo.js';
import SectionThree from './SectionThree.js';
import ClientSection from './ClientSection.jsx';
import TopFreelancers from './TopFreelancers.jsx';
import {  useNavigate } from 'react-router-dom';

function SectionOne() {
    const navigate=useNavigate();
    
    return (
        <div >
            <div className='heros-section'>
                <div className='content'>
                <h1>Hire the best freelancers for any job, online.</h1>
      <p>Millions of people use freelancer website to turn their ideas into reality.</p>
      <button onClick={()=>navigate("/login")}>Get Started <strong>&rarr;</strong></button>
                </div>
               
            </div>
            <TopFreelancers/>
            <ClientSection />
            <SectionTwo />
            <SectionThree />
        </div>
    );
}

export default SectionOne;
