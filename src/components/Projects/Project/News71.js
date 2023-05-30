import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const News71 = () => {
   return (
      <div>
         <div className='mt-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2'>
               <img src="https://i.ibb.co/NW1n6Pd/news71.jpg" alt="" />
               <img src="https://i.ibb.co/r6y7r8j/news71singlepage.jpg" alt="" srcset="" />
               <img src="https://i.ibb.co/WKz85nB/news71-Dashboard.jpg" alt="" srcset="" />
            </div>
         </div>
         <div className='lg:max-w-3xl mx-2'>
            <h1 className='text-3xl my-4 text-white'>News71</h1>
            <p>Group Project | Role: Leader</p>
            <p>News71 is a News Portal Website. It serves as a centralized hub where users can find news articles categorized by different topics and sections. Some features like a homepage with the latest news highlights.</p>
            <ul className="my-2" >
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Two types of users (normal users and admin). Only the admin can add, edit, and delete news.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span>Search functionality article categories, Like, Dislike,Comment functionality.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> User Authentication with Gmail and password and Social Login.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Update, delete, and report news if the admin want, Dashboard for User /Admin.</li>
            </ul>
            <p>Technologies: Tailwind, Flowbite, NextJs, Node.js, ExpressJS, MongoDB, Firebase, JWT.</p>
         </div>
         <div className="btn-group m-6">

            <a href="https://news-71-f8a9f.web.app/" className="btn hover:bg-gradient-to-r from-primary to-secondary">Live Site</a>


            <a href="https://github.com/SaifullaJubair/News-71" className="btn hover:bg-gradient-to-r from-primary to-secondary">GitHub Client</a>


            <a href="https://github.com/SaifullaJubair/news-71-server" className="btn hover:bg-gradient-to-r from-primary to-secondary"> GutHub Server</a>

         </div>
      </div>
   );
};

export default News71;