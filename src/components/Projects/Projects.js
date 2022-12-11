import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Projects = () => {
   return (
      <div>
         <h1 className='text-center my-12 text-4xl font-semibold text-white'>Projects</h1>
         <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>

            <div className="card  bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/y6tXmWg/Screenshot-2022-12-11-233141.jpg" alt="Mobo Sell" /></figure>
               <div className="card-body mx-auto" >
                  <h2 className="card-title text-white text-2xl">
                     Mobo Sell
                  </h2>
                  <p>This Website is used mobile shop. Here seller can sell their phone and buyer can purchase phone .This website has stripe payment system and firebase authentication with JWT security</p>
                  <p>MongoDB, Express, React, Firebase, JWT, Tailwind</p>
                  <div className="card-actions justify-end">
                     <a href='https://mobosell-a12.web.app/'
                        target='_blank'
                        className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"> Live Site
                        <span className='ml-2'><FaExternalLinkAlt></FaExternalLinkAlt></span></a>
                     <button className='btn btn-sm btn-primary'><Link to='/projects/mobosell'>Details</Link></button>
                  </div>
               </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/ZdnL4pG/Screenshot-2022-12-11-232828.jpg" alt="" /></figure>
               <div className="card-body mx-auto">
                  <h2 className="card-title text-white text-2xl">
                     The Kitchen
                  </h2>
                  <p>This is a Kitchen service website. Here user can review services and also update their review. This website has firebase authentication.</p>
                  <p>MongoDB, Express, React, Firebase, JWT, Tailwind</p>
                  <div className="card-actions justify-end">
                     <a href='https://kitchen-a11.web.app/' target='_blank' className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"> Live Site <span className='ml-2'><FaExternalLinkAlt></FaExternalLinkAlt></span></a>
                     <button className='btn btn-sm btn-primary'><Link to='/projects/thekitchen'>Details</Link></button>
                  </div>
               </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
               <figure><img src="https://i.ibb.co/DCvVb93/Screenshot-2022-12-11-232612.jpg" alt="Shoes" /></figure>
               <div className="card-body mx-auto">
                  <h2 className="card-title text-white text-2xl">
                     Edmy
                  </h2>
                  <p>This is course selling website . User can buy course here .This is a demo website. This website has firebase authentication.</p>
                  <p>React, Express, Firebase, Bootstrap </p>
                  <div className="card-actions justify-end">
                     <a target='_blank' href='https://edmy-client-a10.web.app/' className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"> Live Site <span className='ml-2'><FaExternalLinkAlt></FaExternalLinkAlt></span></a>
                     <button className='btn btn-sm btn-primary'><Link to='/projects/edmy'>Details</Link></button>
                  </div>
               </div>
            </div>


         </div>
      </div>
   );
};

export default Projects;