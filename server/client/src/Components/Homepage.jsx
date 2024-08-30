import React from 'react';
import './HomePage.css';
import image from './images/home.jpg';
import Slider from 'react-slick';

function HomePage() {
    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    //   };
    return (  
        <div>
            <div className='mainContent'>
                <img src={image} alt="not available" id='background-image'></img>
            
                <div className='body-content'>
                <div className='heading'>
                   <h1>Hire the best freelancers for any job, online.</h1>
                </div>
                <div className='small-heading'>
                   <ul>
                    <li>Best freelance marketplace</li>
                    <li> Any job you can possibly think of</li>
                   </ul>
                 </div>

                </div>
                

            </div>
            {/* <div className='jobs-section'> */}
            {/* <div className="slider-container">
                <Slider {...settings} >
                <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>

                </Slider>

            </div>
            </div>

            <footer>
                <h1>Hello THis is Footer</h1>
            </footer>
             */}


        </div>
    );
}

export default HomePage;