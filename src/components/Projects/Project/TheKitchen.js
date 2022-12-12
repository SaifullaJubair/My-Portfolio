import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const TheKitchen = () => {
   return (
      <div>
         <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2'>
               <img src="https://i.ibb.co/ZdnL4pG/Screenshot-2022-12-11-232828.jpg" alt="" />
               <img src="https://i.ibb.co/C7tn7Yn/Screenshot-2022-12-11-232937.jpg" alt="" srcset="" />
               <img src="https://i.ibb.co/jbQzf3G/Screenshot-2022-12-11-233059.jpg" alt="" srcset="" />
            </div>
         </div>
         <div className='lg:max-w-3xl mx-2'>
            <h1 className='text-3xl my-4 text-white'>The Kitchen</h1>
            <p>This is a Kitchen service website. Here user can review services and also update their review. This website has firebase authentication.</p>
            <ul className="my-2" >
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Users can view services and place reviews.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> User Authentication with Gmail and password as well as Social Login.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Authorization of the user to view their reviews.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span>  Update and delete reviews if the user wants.</li>
            </ul>
            <p>Technologies: Tailwind CSS, React, React-Router-DOM, Firebase, JWT, MongoDB, Express, Node.daisyUI</p>
         </div>
      </div >
   );
};

export default TheKitchen;