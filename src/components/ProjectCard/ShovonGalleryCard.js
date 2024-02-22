import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShovonGalleryCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <Link to="/projects/shovon's-gallery">
        <img
          src="https://i.ibb.co/RhJqrRd/Screenshot-2023-12-24-215500.png"
          alt="Mobo Sell"
          className="h-[240px] w-full rounded-t-lg"
        />
      </Link>
      <div className="card-body mx-auto">
        <h2 className="card-title  text-gray-700 text-2xl">
          ShovonGallery
          <span className="text-xs"> (e-commerce)</span>
        </h2>

        <p className="text-sm">
          <span className="font-semibold">Shovon's Gallery</span> is a
          feature-rich e-commerce platform specializing in artificial ornaments
          and antique jewelry.
        </p>
        <p className="text-sm">
          <span className="font-semibold">Technology Used:</span> ReactJS,
          Tailwind, Flowbite, Node.js, ExpressJS, MongoDB, Firebase, SSLCommcez.
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
  );
};

export default ShovonGalleryCard;
