import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Banner.css'
const Banner = () => {
   return (
      <section>
         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 banner">
            <div className="grid lg:grid-cols-2">
               <div>
                  <img
                     className=" mx-auto "
                     src="https://i.ibb.co/CMNJ9ZT/saifulla-png-removebg-preview-1-1.png"
                     alt=""
                  />
               </div>
               <div className="lg:pr-10 my-12">
                  <h2 className='text-5xl '>Hi, I'm</h2>
                  <h1 className='text-7xl '>Saifulla Jubair</h1>
                  <p className="my-6  text-2xl">
                     I'm Front-end Developer.Daily learner
                     {/* I am a MERN Stack developer who learned and was certified by Programming Hero. I have done many full-stack projects with React and Node js. */}

                  </p>
                  <hr className="mb-5 border-gray-300" />
                  <a href='https://drive.google.com/file/d/1OQWy-90Ko-45uwwDkKniPBKkhfMrUyA8/view' target='_blank' className="btn btn-outline mb-6">Get Resume <span className='ml-2'><FaExternalLinkAlt></FaExternalLinkAlt></span></a>

               </div>

            </div>
         </div>

      </section >
   );
};

export default Banner;