import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Banner.css";
const Banner = () => {
  return (
    <section
      id=""
      className="bg-primary text-white min-h-screen  font-semibold"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36 banner ">
        <div className="grid lg:grid-cols-2">
          <div
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%    ",
            }}
            className="border-red-200 border lg:w-[450px] mx-auto bg-success"
          >
            <img
              className="  "
              src="https://i.ibb.co/CMNJ9ZT/saifulla-png-removebg-preview-1-1.png"
              alt=""
            />
          </div>
          <div className="lg:pr-10 lg:my-0 md:my-12 my-12">
            <h2 className="text-5xl tracking-wide ">Hi, I'm</h2>
            <h1 className="lg:text-7xl md:text-7xl text-5xl tracking-wider ">
              Saifulla Jubair
            </h1>
            <p className="my-6  text-2xl tracking-wider">
              I'm MERN Stack Developer
              {/* I'm Front-end Developer.Daily learner */}
              {/* I am a MERN Stack developer who learned and was certified by Programming Hero. I have done many full-stack projects with React and Node js. */}
            </p>
            <p className="my-8 text-gray-500">
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
            <hr className="mb-5 border-gray-300" />

            <a
              href="https://drive.google.com/file/d/1OQWy-90Ko-45uwwDkKniPBKkhfMrUyA8/view"
              target="_blank"
              className="btn btn-outline text-gray-800 bg-info mb-6"
            >
              Get Resume{" "}
              <span className="ml-2">
                <FaExternalLinkAlt></FaExternalLinkAlt>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
