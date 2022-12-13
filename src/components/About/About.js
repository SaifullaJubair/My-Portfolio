import React from 'react';

const About = () => {
   return (
      <section id='about'>

         <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-6 md:mb-8">
               <div>
                  <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none md:mb-6 group">
                     <span className="inline-block mb-1 sm:mb-4">
                        About Me
                     </span>
                     <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  <p className="lg:max-w-3xl">
                     Hi! I'm Saifulla Jubair, a MERN Stack developer who learned and was certified by Programming Hero. I have done some full-stack projects. I'm an expert with React Js, JavaScript, ES6, REST API, Firebase, Node Js, MongoDB, Stripe Payment Integration, React Query, React Router, React Bootstrap, Bootstrap, HTML5, CSS3, Tailwind CSS, Daisy UI and Material UI to create various features for client websites. I am fast learner at technical term. I like to learn new technologies and apply to my projects for make my projects up to date. With my knowledge and practice I am confident & excited to work with your organization.
                  </p>

               </div>

            </div>

         </div>

      </section>
   );
};

export default About;