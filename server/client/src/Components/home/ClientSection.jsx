import React from 'react';
import Slider from 'react-slick';

function ClientSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return ( <div className="container w-50 h-100 mb-60">
        <section className="slider-container">
    


        <h2 className="text-center m-4 text-capitalize ">
            What Clients Say
        </h2>		
    <Slider {...settings}>
        
               
                    <div  className="c-carousel__item c-carousel__item--active">
                        <p className="text-center h6 fw-light">
                            In our company, we do ongoing research with our target audience. 
                            This includes 30-45 minute phone interviews. It was difficult to conduct the interview, 
                            really listen, and ask good follow up questions while trying to capture it all in thorough 
                            hand-written notes. One of our writers suggested using Guru to find 
                            someone to transcribe these interviews...
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure >
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-ed-bagley.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Ed Bagley" /> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Ed Bagley</h3>
                                <p className="fs-6 fw-light">Director of Product Marketing, O.C. Tanner Company</p>
                            </div>
                        </div>
                    </div>
    
                    <div  className="c-carousel__item">
                        <p className='text-center h6 fw-light'>
                            Scopic Software has been on Guru since its founding in 2006. We are now over 200 employees 
                            and Guru is still our primary source of new clients. We would not be where we are today without Guru. 
                            It is definitely the best service marketplace out there if you are looking to grow a company, either as a buyer or provider.
                        </p>
                        
                        <div className="d-flex justify-content-center ">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-scopic-software.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Scopic Software"/> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Scopic Software</h3>
                                <p className="fs-6 fw-light">Custom IT Solutions Firm</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="c-carousel__item">
                        <p className=" text-center h6 fw-light">
                            Guru's services have allowed me to find more freelancing work as a writer 
                            than any other website. It is easy to communicate with clients through their message system and 
                            their SafePay feature ensures that all funds are secured prior to any work being done. 
                            I would recommend Guru to any freelancer who is looking to find new clients online.
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-russell-lee.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Russell Lee"/> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Russell Lee</h3>
                                <p className="fs-6 fw-light">Writer</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="c-carousel__item">
                        <p className="text-center h6 fw-light">
                            At SOLACE Engineers, we provide engineering solutions and other services on various 
                            freelancing platforms. Among them all, Guru is the best and our first choice to invite 
                            clients outside of freelancing platforms. Great customer support, low fee, easy to understand 
                            interface and solid payment protection with the SafePay system make working a delight on Guru! Guru really helped our business flourish…
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-solace-engineers-inc.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Solace Engineers Inc." /> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Solace Engineers Inc.</h3>
                                <p className="fs-6 fw-light">Engineering Firm</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="c-carousel__item">
                        <p className="text-center h6 fw-light">
                            Guru.com is my favorite freelance platform. I love the functionality, the support and the 
                            strong workflow element, particularly the SafePay feature which makes the transfer of funds 
                            so easy. I love the integration with PayPal and the ability to amend agreements, with all 
                            steps communicated to and actioned by both sides. Of all the freelance platforms I have used, Guru is by far my favorite.
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-isabel-austin.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Isabel Austin" /> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Isabel Austin</h3>
                                <p className="fs-6 fw-light">Writer, Editor, Proofreader</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="c-carousel__item">
                        <p className="text-center h6 fw-light">
                            Guru has been so helpful in growing my business in an industry that is tough to get into! 
                            Not only can I apply for endless amounts of gigs that I feel I am a match for...but potential 
                            clients can invite me to apply for gigs which has brought me a lot of success. I love how it 
                            connects people from all over the world and gives us an opportunity to work together on just about 
                            any project imaginable. I am excited to continue growing my business here!
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-ella-rouge-music.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Ella Rogue" /> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Ella Rogue</h3>
                                <p className="fs-6 fw-light">Singer, Songwriter</p>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="c-carousel__item">
                        <p className="text-center h6 fw-light">
                            As the CEO of www.taxconnections.com, I looked all over the world for someone 
                            I could trust to handle our servers and databases. Nix Solutions Ltd. has delivered 
                            support for all our servers in the cloud for several years now and they are amazing. 
                            As I talked to other service providers who wanted to charge me 10X more I was stunned 
                            and pleasantly surprised to discover Nix Solutions Ltd at their low prices. 
                           
                        </p>
                        
                        <div className="d-flex justify-content-center">
                            <figure className="c-avatar__image">
                                <img src="https://res.cloudinary.com/gurucom/image/upload/f_auto/static/homepage/photo-kat-jennings.jpg" className="rounded-circle" loading="lazy" height="64px" width="64px" alt="Kat Jennings" /> 
                            </figure>
                            <div className="c-avatar__meta">
                                <h3 className="fs-4 fw-normal">Kat Jennings	</h3>
                                <p className="fs-6 fw-light">CEO, TaxConnections</p>
                            </div>
                        </div>
                    </div>
                    
               
                </Slider>
            
            
           
     
    </section>
    </div> );
}

export default ClientSection;