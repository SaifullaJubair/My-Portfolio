import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LensBDCard = () => {
  return (
    <div className="card  bg-base-100  shadow-xl">
      <Link to="/projects/lens-bd">
        <img
          className="h-[240px] w-full rounded-t-lg "
          src="https://i.ibb.co/c17fKRm/Screenshot-2024-02-03-015644.png"
          alt="LensBD Pic"
        />
      </Link>
      <div className="card-body mx-auto">
        <h2 className="card-title  text-gray-700 text-2xl">
          LensBD
          <span className="text-xs"> (Eye Glasses Management Dashboard)</span>
        </h2>
        <p className="text-sm">
          <span className="font-semibold">LensBD</span> is a comprehensive Eye
          Glasses Management Dashboard designed to streamline the management of
          eyeglasses inventory and sales.
          <p className="">
            <span className="font-semibold">Technology Used:</span> Vite.Js,
            TypeScript, Redux Redux, Firebase, Taiwind Css, Meterial Tailwind,
            Express.js, Node.js, MongoDB, Vercel.
          </p>
        </p>
        <div className="card-actions mt-2 justify-end">
          <a
            href="https://lensbd.netlify.app/"
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
            <Link to="/projects/lens-bd">Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LensBDCard;
