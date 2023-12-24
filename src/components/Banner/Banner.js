import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Banner.css";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <section
      id=""
      className="bg-primary text-white min-h-screen  font-semibold"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-36 banner ">
        <div className="lg:flex-row flex-col-reverse flex md:flex-row ">
          <div className="lg:pr-10 lg:my-10 md:my-12 my-12 lg:w-1/2 w-full">
            <h2 className="text-5xl tracking-wide ">Hi, I'm</h2>
            <h1 className="lg:text-6xl md:text-5xl text-5xl tracking-wider ">
              Saifulla Jubair
            </h1>

            <TypeAnimation
              sequence={[
                "I'm Front-end Developer", // Types 'One'
                1000, // Waits 1s
                "I'm MERN Stack Developer", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "I'm Full Stack Developer", // Types 'Three' without deleting 'Two'
                5000, // Waits 3s
                "I'm Daily learner",
                7000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
            />

            <p className="my-8 text-gray-500">
              "As a Full Stack Developer, I am passionate about architecting
              end-to-end solutions that seamlessly integrate both frontend and
              backend technologies. With expertise in a diverse range of tools
              and languages, from React for dynamic user interfaces to Node.js
              and MongoDB for scalable server-side applications, I bring a
              holistic approach to web development."
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
          <div className="lg:w-1/2 w-full">
            <img
              className="  w-full md:w-[600px] h-auto md:h-[522px]"
              src="https://i.ibb.co/3zqBVxP/Untitled-design-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
