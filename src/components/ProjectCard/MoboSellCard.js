import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoboSellCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <Link to="/projects/mobosell">
        <img
          src="https://i.ibb.co/y6tXmWg/Screenshot-2022-12-11-233141.jpg"
          alt="Mobo Sell"
          className="h-[240px] w-full rounded-t-lg"
        />
      </Link>
      <div className="card-body mx-auto">
        <h2 className="card-title text-gray-700 text-2xl">Mobo Sell</h2>
        <p className="text-sm">
          This Website is used mobile shop. Here seller can sell their phone and
          buyer can purchase phone .This website has stripe payment system and
          firebase authentication with JWT security
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
  );
};

export default MoboSellCard;
