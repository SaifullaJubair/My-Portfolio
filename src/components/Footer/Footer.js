import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
   return (
      <div className='footers mt-6'>

         <footer className="footer items-center p-4 text-neutral-content">
            <div className="items-center grid-flow-col ">
               <p className='text-2xl'>Saifulla Jubair</p>
            </div>
            <div className="grid-flow-col gap-4 text-2xl md:place-self-center md:justify-self-end">
               <a rel="noopener noreferrer" href="https://www.facebook.com/saifullajubair.saiful" title="Facebook" className="flex items-center p-1">
                  <FaFacebook></FaFacebook>
               </a>
               <a rel="noopener noreferrer" href="https://github.com/SaifullaJubair" title="GitHum" className="flex items-center p-1">
                  <FaGithub className=''></FaGithub>
               </a>
               <a rel="noopener noreferrer" href="https://www.linkedin.com/in/saifulla-jubair/" title="LinkedIn" className="flex items-center p-1">
                  <FaLinkedin></FaLinkedin>
               </a>
            </div>
         </footer>
      </div>
   );
};

export default Footer;