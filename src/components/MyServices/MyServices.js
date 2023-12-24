import React from "react";
import { BsFileEarmarkCode } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import img1 from "../../asset/undraw_Static_website_re_x70h.png";
import img2 from "../../asset/undraw_hacker_mind_6y85.png";
import img3 from "../../asset/undraw_Developer_activity_re_39tg.png";
const MyServices = () => {
  return (
    <div id="service" className="bg-accent">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          data-aos="zoom-in"
        >
          <p className="text-info text-3xl py-6 font-semibold tracking-wider">
            MY SERVICE
          </p>
          <h2 className="max-w-lg mb-16 font-sans text-3xl font-bold leading-none tracking-wide text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Crafting</span>
            </span>{" "}
            stories through design and development
          </h2>
        </div>
        <div
          className="grid gap-8 row-gap-8 lg:grid-cols-3"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* Frontend Development */}
          <div
            className="sm:text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center justify-center mb-4  sm:mx-auto sm:w-24 sm:h-24">
              <img
                src={img1}
                className="w-24 h-24 rounded-full ring-2 ring-lime-400"
                alt=""
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-lg text-white">
              Frontend Development.
            </h6>
            <p className="max-w-md mb-3 text-sm text-slate-50 sm:mx-auto">
              I specialize in frontend development using React,Html, Css,
              Tailwind, Bootstrap creating dynamic and responsive user
              interfaces.
            </p>
          </div>
          {/* Backend Development */}
          <div
            className="sm:text-center"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="flex items-center justify-center mb-4  sm:mx-auto sm:w-24 sm:h-24">
              <img
                src={img2}
                className="w-24 h-24 rounded-full ring-2 ring-lime-400"
                alt=""
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-lg text-white">
              Backend Development
            </h6>
            <p className="max-w-md mb-3 text-sm text-slate-50 sm:mx-auto">
              In backend development, I specialize in utilizing Node.js and
              Express.js to build scalable and efficient server-side
              applications.
            </p>
          </div>
          {/* FullStack Development */}
          <div
            className="sm:text-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="flex items-center justify-center mb-4  sm:mx-auto sm:w-24 sm:h-24">
              <img
                src={img3}
                className="w-24 h-24 rounded-full ring-2 ring-lime-400"
                alt=""
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-lg text-white">
              Full-Stack Development
            </h6>
            <p className="max-w-md mb-3 text-sm text-slate-50 sm:mx-auto">
              I excel in MERN (MongoDB, Express.js, React, Node.js) stack
              development. From designing and implementing robust server-side
              applications to creating dynamic and responsive user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
