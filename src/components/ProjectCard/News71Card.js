import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const News71Card = () => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <Link to="/projects/news71">
          <img
            src="https://i.ibb.co/NW1n6Pd/news71.jpg"
            alt="News71 Pic"
            className="h-[240px] w-full rounded-t-lg"
          />
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
          </p>
          <p className="text-sm">
            <span className="font-semibold">Technology Used:</span> Next.js,
            Express.js, Firebase, MongoDB, Flowbite, Tailwind
          </p>
          <div className="card-actions justify-end my-2">
            <a
              href="https://news-71-f8a9f.web.app/"
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
            <button className="btn btn-sm  btn-primary">
              <Link to="/projects/news71">Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News71Card;
