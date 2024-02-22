import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Edmy = () => {
   return (
      <div>
         <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2'>
               <img src="https://i.ibb.co/DCvVb93/Screenshot-2022-12-11-232612.jpg" alt="" />
               <img src="https://i.ibb.co/xm24t8w/Screenshot-2022-12-11-232645.jpg" alt="" srcset="" />
               <img src="https://i.ibb.co/JnL2CFC/Screenshot-2022-12-11-232717.jpg" alt="" srcset="" />
            </div>
         </div>
         <div className='lg:max-w-3xl mx-2'>
            <h1 className='text-3xl my-4 text-white'>Edmy</h1>
            <p>This is a course-selling website. Users can buy courses here. This is a demo website. This website has firebase authentication.</p>
            <ul className="my-2" >

               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> User can select the course from the course list to see the course information.</li>

               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span>  User must authenticate before getting premium access to the course.</li>

               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span>  User can download the course description as a PDF.</li>
            </ul>

            <p>Technologies: BootStrap, React, React-Router-DOM, Firebase, React-To-PDF, Express, Node.</p>
         </div>

         <div className="btn-group m-6">
            <a href="https://edmy-client-a10.web.app/" className="btn hover:bg-gradient-to-r from-primary to-secondary">Live Site</a>

            <a href="https://github.com/SaifullaJubair/Edmy-Learning-platform" className="btn hover:bg-gradient-to-r from-primary to-secondary">GitHub Client</a>

            <a href="https://github.com/SaifullaJubair/Edmy-server" className="btn hover:bg-gradient-to-r from-primary to-secondary"> GutHub Server</a>

         </div>
      </div >
   );
};

export default Edmy;