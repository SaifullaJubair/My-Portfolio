import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FareBDCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <Link to="/projects/farebd">
        <img
          src="https://i.ibb.co/7RNtCTh/farebd.jpg"
          alt="FareBd Pic"
          className="h-[240px] w-full rounded-t-lg"
        />
      </Link>
      <div className="card-body mx-auto">
        <h2 className="card-title text-gray-700 text-2xl">
          FareBD <span className="text-xs"> (House Rental & Selling App)</span>
        </h2>
        <p className="text-sm">
          Group Project | Role: Leader & Github manager. <br />
          <span className="font-semibold">FareBD</span> is a House sale and
          rental website Where the house owner can sell the house and pay the
          rent, Tenant can buy house can take rent. Functionality can be used in
          a variety of ways.
          <p className="">
            <span className="font-semibold">Technology Used:</span> Next.js,
            Express.js, Firebase, MongoDB, Flowbite, Tailwind
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
  );
};

export default FareBDCard;
