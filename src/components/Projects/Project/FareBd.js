import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FareBd = () => {
   return (
      <div>
         <div className='mt-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2'>
               <img src="https://i.ibb.co/7RNtCTh/farebd.jpg" alt="" />
               <img src="https://i.ibb.co/B3zh3MF/farebd2.jpg" alt="" srcset="" />
               <img src="https://i.ibb.co/VThRghw/farebd-Dashboardejpg.jpg" alt="" srcset="" />
            </div>
         </div>
         <div className='lg:max-w-3xl mx-2'>
            <h1 className='text-3xl my-4 text-white'>FareBD</h1>
            <p>Group Project | Role: Leader</p>
            <p>  House sale and rental website Where the house owner can sell the house and pay the rent, Tenant can buy house can take rent. Functionality can be used in a variety of ways.</p>
            <ul className="my-2" >
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Seller can add property, Buyer can buy, rent or add to Wishlist, payment with cards, Buyer can search property by Search Field.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Different types of users (Buyer/Seller/Admin) based interactive dashboard.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> User type verification with custom hooks, user login & registration system.</li>
               <li className='flex items-center mx-2'><span className='mr-1'><FaCheckCircle></FaCheckCircle></span> Dashboard for Buyer/Seller/Admin</li>
            </ul>
            <p>Technologies: Next.js, Express.js, Firebase, MongoDB, Tailwind CSS, Flowbite, Stripe, TanStack Query,
               React Icons, React Hot Toast, SwiperJS, Custom Hooks.</p>
         </div>
         <div className="btn-group m-6">

            <a href="https://farebd-9.web.app/" className="btn hover:bg-gradient-to-r from-primary to-secondary">Live Site</a>


            <a href="https://github.com/SaifullaJubair/FareBD" className="btn hover:bg-gradient-to-r from-primary to-secondary">GitHub Client</a>


            <a href="https://github.com/SaifullaJubair/Server-FareBD" className="btn hover:bg-gradient-to-r from-primary to-secondary"> GutHub Server</a>

         </div>
      </div>
   );
};

export default FareBd;