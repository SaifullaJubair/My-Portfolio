import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footers pt-6 bg-neutral  px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-[1320px] mx-auto text-white my-8">
        {/* Address  */}
        <div className="flex flex-col md:flex-row md:items-center  gap-4 my-6">
          <div className="bg-info rounded-full w-24 h-24 items-center justify-center flex">
            <FaLocationDot className=" text-primary text-4xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl mb-3 font-semibold ">Address</h1>
            <p className="text-gray-300">Khulna, Bangladesh</p>
            <p className="text-gray-300">GPO: 9000, Shonadanga</p>
          </div>
        </div>
        {/* Contact  */}
        <div className="flex flex-col md:flex-row md:items-center  gap-4 mb-6 ">
          <div className="bg-info rounded-full w-24 h-24 items-center justify-center flex">
            <FaPhoneAlt className=" text-primary text-4xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl mb-3 font-semibold ">Lets talk</h1>
            <p className="text-gray-300">+880 1923868397</p>
          </div>
        </div>

        {/* Email  */}
        <div className="flex flex-col md:flex-row md:items-center  gap-4  mb-6">
          <div className="bg-info rounded-full w-24 h-24 items-center justify-center flex">
            <MdEmail className=" text-primary text-4xl" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl mb-3 font-semibold ">Send email</h1>
            <p className="text-gray-300">saifullajubair6@gmail.com</p>
          </div>
        </div>
      </div>
      <hr className="text-gray-300" />
      <footer className="footer items-center p-12 text-neutral-content">
        <div className="items-center grid-flow-col ">
          <p className="text-5xl">Saifulla Jubair</p>
        </div>
        <div className="grid-flow-col gap-4 text-2xl md:place-self-center md:justify-self-end">
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/saifullajubair.saiful"
            title="Facebook"
            className="flex items-center p-1"
          >
            <FaFacebook className="text-4xl"></FaFacebook>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://github.com/SaifullaJubair"
            title="GitHum"
            className="flex items-center p-1"
          >
            <FaGithub className="text-4xl"></FaGithub>
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/saifulla-jubair/"
            title="LinkedIn"
            className="flex items-center p-1"
          >
            <FaLinkedin className="text-4xl"></FaLinkedin>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
