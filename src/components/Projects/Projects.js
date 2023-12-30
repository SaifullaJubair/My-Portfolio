import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="bg-accent ">
      <div className=" max-w-[1320px] py-20 mx-auto">
        <h1 className="text-center py-12 text-4xl font-semibold text-white">
          All Projects
        </h1>
        <div className="grid gap-3 mx-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
          <div className="card  bg-base-100 shadow-xl">
            <Link to="/projects/shovon's-gallery">
              <img
                src="https://i.ibb.co/RhJqrRd/Screenshot-2023-12-24-215500.png"
                alt="Mobo Sell"
              />
            </Link>
            <div className="card-body mx-auto">
              <h2 className="card-title text-gray-700 font-medium text-2xl">
                Shovon's Gallery
              </h2>
              <p className="text-sm">
                <span className="font-semibold">Shovon's Gallery</span> is a
                feature-rich e-commerce platform specializing in artificial
                ornaments and antique jewelry.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technology Used:</span> ReactJS,
                Tailwind, Flowbite, Node.js, ExpressJS, MongoDB, Firebase,
                SSLCommcez.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://shovon-sgallery.web.app/"
                  target="_blank"
                  className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"
                >
                  {" "}
                  Live Site
                  <span className="ml-2">
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                  </span>
                </a>
                <button className="btn btn-sm btn-primary">
                  <Link to="/projects/shovon's-gallery">Details</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 shadow-xl">
            <Link to="/projects/mobosell">
              <img
                src="https://i.ibb.co/y6tXmWg/Screenshot-2022-12-11-233141.jpg"
                alt="Mobo Sell"
              />
            </Link>
            <div className="card-body mx-auto">
              <h2 className="card-title text-gray-700 text-2xl">Mobo Sell</h2>
              <p className="text-sm">
                This Website is used mobile shop. Here seller can sell their
                phone and buyer can purchase phone .This website has stripe
                payment system and firebase authentication with JWT security
              </p>
              <p>MongoDB, Express, React, Firebase, JWT, Tailwind</p>
              <div className="card-actions justify-end">
                <a
                  href="https://mobosell-a12.web.app/"
                  target="_blank"
                  className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"
                >
                  {" "}
                  Live Site
                  <span className="ml-2">
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                  </span>
                </a>
                <button className="btn btn-sm btn-primary">
                  <Link to="/projects/mobosell">Details</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="card  bg-base-100 shadow-xl">
            <Link to="/projects/farebd">
              <img src="https://i.ibb.co/7RNtCTh/farebd.jpg" alt="FareBd Pic" />
            </Link>
            <div className="card-body mx-auto">
              <h2 className="card-title text-gray-700 text-2xl">
                FareBD{" "}
                <span className="text-xs"> (House Rental & Selling App)</span>
              </h2>
              <p className="text-sm">
                Group Project | Role: Leader & Github manager. <br />
                <span className="font-semibold">FareBD</span> is a House sale
                and rental website Where the house owner can sell the house and
                pay the rent, Tenant can buy house can take rent. Functionality
                can be used in a variety of ways.
                <p className="">
                  <span className="font-semibold">Technology Used:</span>{" "}
                  Next.js, Express.js, Firebase, MongoDB, Flowbite, Tailwind
                </p>
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://farebd-9.web.app/"
                  target="_blank"
                  className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"
                >
                  {" "}
                  Live Site
                  <span className="ml-2">
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                  </span>
                </a>
                <button className="btn btn-sm btn-primary">
                  <Link to="/projects/farebd">Details</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="card  bg-base-100 shadow-xl">
            <Link to="/projects/news71">
              <img src="https://i.ibb.co/NW1n6Pd/news71.jpg" alt="News71 Pic" />
            </Link>
            <div className="card-body mx-auto">
              <h2 className="card-title text-gray-700 text-2xl">
                News71 <span className="text-sm">(News Portal)</span>
              </h2>
              <p className="text-sm">
                Group Project | Role: Leader & Github manager. <br />{" "}
                <span className="font-semibold">News71</span> is a{" "}
                <span className="font-semibold">News Portal</span> Website. It
                serves as a centralized hub where users can find news articles
                categorized by different topics and sections.
                {/* Some features like a homepage with the latest news
                highlights, search functionality, article categories etc.{" "} */}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technology Used:</span> Next.js,
                Express.js, Firebase, MongoDB, Flowbite, Tailwind
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://news-71-f8a9f.web.app/"
                  target="_blank"
                  className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"
                >
                  {" "}
                  Live Site
                  <span className="ml-2">
                    <FaExternalLinkAlt></FaExternalLinkAlt>
                  </span>
                </a>
                <button className="btn btn-sm btn-primary">
                  <Link to="/projects/news71">Details</Link>
                </button>
              </div>
            </div>
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
    </div>
  );
};

export default Projects;
