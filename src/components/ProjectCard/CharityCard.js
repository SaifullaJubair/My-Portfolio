import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CharityCard = () => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <Link to="/projects/charity">
        <img
          className="h-[240px] w-full rounded-t-lg "
          src="https://i.ibb.co/bv7nTRW/Screenshot-2024-02-12-054317.png"
          alt="Charity Pic"
        />
      </Link>
      <div className="card-body mx-auto">
        <h2 className="card-title  text-gray-700 text-2xl">
          Charity
          <span className="text-xs"> (Donation Management System)</span>
        </h2>
        <p className="text-sm">
          <span className="font-semibold">Charity</span> serves as a robust and
          feature-rich platform, empowering organizations to manage charitable
          activities seamlessly.
          <p className="">
            <span className="font-semibold">Technology Used:</span> Next.Js -
            14.1.0, React Redux, Redux Thunk, Redux Toolkit Query, Firebase,
            Taiwind, Ant Design, Express.js, Node.js, MongoDB, Vercel
          </p>
        </p>
        <div className="card-actions mt-2 justify-end">
          <a
            href="https://github.com/SaifullaJubair/charity-client-site"
            target="_blank"
            className="btn btn-sm btn-primary  bg-gradient-to-r from-primary to-secondary"
            rel="noreferrer"
          >
            {" "}
            Live Site
            <span className="ml-2">
              <FaExternalLinkAlt></FaExternalLinkAlt>
            </span>
          </a>
          <button className="btn btn-sm btn-primary">
            <Link to="/projects/charity">Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharityCard;
