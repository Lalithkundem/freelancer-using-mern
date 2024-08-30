import React from 'react';
import './TopFreelancers.css';
function TopFreelancers() {
    const freelancers = [
        {
          id:1,
          category: "Writing & Translation",
          link: "https://cdn-icons-png.flaticon.com/128/1663/1663291.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-3",
          count: 208139,
        },
        {
          id:2,
          category: "Design & Art",
          link: "https://cdn-icons-png.flaticon.com/128/1496/1496034.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-2",
          count: 192183,
        },
        {
          id:3,
          category: "Administrative & Secretarial",
          link: "https://cdn-icons-png.flaticon.com/128/11494/11494348.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-5",
          count: 84812,
        },
        {
          id:4,
          category: "Sales & Marketing",
          link: "https://cdn-icons-png.flaticon.com/128/17439/17439265.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-4",
          count: 74978,
        },
        {
          id:5,
          category: "Engineering & Architecture",
          link: "https://cdn-icons-png.flaticon.com/128/2421/2421341.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-6",
          count: 50172,
        },
        {
          id:6,
          category: "Business & Finance",
          link: "https://cdn-icons-png.flaticon.com/128/3222/3222498.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-7",
          count: 44598,
        },
        {
          id:7,
          category: "Education & Training",
          link: "https://cdn-icons-png.flaticon.com/128/17314/17314136.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-9",
          count: 9684,
        },
        {
          id:8,
          category: "Legal",
          link: "https://cdn-icons-png.flaticon.com/128/2011/2011131.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-8",
          count: 5553,
        },
        {
          id:9,
          category: "Programming & Development",
          link: "https://cdn-icons-png.flaticon.com/128/1197/1197460.png",
          icon: "/images/homepage/symbol-defs.svg#icon-cat-1",
          count: 0,
        },
      ];
      
     
      
    return ( 
        <div className=''>
            <div  className='container w-50 '>
                <h2 className='text-center m-4'>Top Freelancers</h2>
                <hr/>
                <div className='card-free'>
                {
                    freelancers.map(
                        (fl)=> 
                            <div className='free-card' key={fl.id}>
                                <img src={fl.link} alt="not working" width={30} height={30}/>
                        <h4 >{fl.category}</h4>
                        <h6 >{fl.count} <small>Freelancers</small></h6>
                        </div>
                        )
                }</div>
               
            </div>

        </div>
     );
}

export default TopFreelancers;