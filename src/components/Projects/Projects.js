import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShovonGalleryCard from "../ProjectCard/ShovonGalleryCard";
import MoboSellCard from "../ProjectCard/MoboSellCard";
import FareBDCard from "../ProjectCard/FareBDCard";
import CharityCard from "../ProjectCard/CharityCard";
import News71Card from "../ProjectCard/News71Card";
import LensBDCard from "../ProjectCard/LensBDCard";

const Projects = () => {
  return (
    <div id="projects" className="bg-accent ">
      <div className=" max-w-[1440px] py-20 mx-auto">
        <h1 className="text-center py-12 text-4xl font-semibold text-white">
          All Projects
        </h1>
        <h1 className="my-8 mx-2 text-3xl font-semibold text-white">
          {" "}
          Solo Projects:
        </h1>
        <div className="grid mx-8 lg:mx-4 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4 lg:grid-cols-3  xl:grid-cols-4 mb-10">
          {/* Shovon Gallery */}
          <CharityCard />
          <ShovonGalleryCard />
          <LensBDCard />
          <MoboSellCard />
        </div>
        <h1 className="my-8 mx-2 text-3xl font-semibold text-white">
          {" "}
          Group Projects:
        </h1>
        <div className="grid gap-3 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Shovon Gallery */}

          <FareBDCard />
          <News71Card />
        </div>

        {/* <div className="card  bg-base-100 shadow-xl">
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
                  <p>This is a course-selling website. Users can buy courses here. This is a demo website. This website has firebase authentication.</p>
                  <p>React, Express, Firebase, Bootstrap </p>
                  <div className="card-actions justify-end">
                     <a target='_blank' href='https://edmy-client-a10.web.app/' className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"> Live Site <span className='ml-2'><FaExternalLinkAlt></FaExternalLinkAlt></span></a>
                     <button className='btn btn-sm btn-primary'><Link to='/projects/edmy'>Details</Link></button>
                  </div>
               </div>
            </div>
 */}
      </div>
    </div>
  );
};

export default Projects;
