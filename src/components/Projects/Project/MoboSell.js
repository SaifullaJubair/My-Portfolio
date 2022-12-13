import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const MoboSell = () => {
   return (
      <div>
         <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2'>
               <img src="https://i.ibb.co/y6tXmWg/Screenshot-2022-12-11-233141.jpg" alt="" />
               <img src="https://i.ibb.co/S7Dy68c/Screenshot-2022-12-11-233209.jpg" alt="" srcset="" />
               <img src="https://i.ibb.co/t4M6rhD/Screenshot-2022-12-11-233347.jpg" alt="" srcset="" />
            </div>
         </div>
         <div className='lg:max-w-3xl mx-2'>
            <h1 className='text-3xl my-4 text-white'>MoboSell</h1>
            <p>This is a 2nd hand Mobile Selling Website. Here seller can sell their phone and buyer can purchase phone.This website has stripe payment system and firebase authentication with JWT security</p>
            <ul className="my-2" >
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Users can views categories book product and paid with card.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Buyer/Seller Authentication with Gmail and password as well as Social Login.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Dashboard for Buyer/Seller/Admin</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Update, deleted, reported product if the buyers wants</li>
            </ul>
            <p>Technologies: Tailwind CSS, React, React-Router-DOM, Firebase, JWT, MongoDB, Express, Node. Stripe, daisyUI</p>
         </div>
         <div className="btn-group m-6">

            <a href="https://mobosell-a12.web.app/" className="btn hover:bg-gradient-to-r from-primary to-secondary">Live Site</a>


            <a href="https://github.com/SaifullaJubair/MogoSell" className="btn hover:bg-gradient-to-r from-primary to-secondary">GitHub Client</a>


            <a href="https://github.com/SaifullaJubair/MoboSell-Server" className="btn hover:bg-gradient-to-r from-primary to-secondary"> GutHub Server</a>

         </div>
      </div>
   );
};

export default MoboSell;