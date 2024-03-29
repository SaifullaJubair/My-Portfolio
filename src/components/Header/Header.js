import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary sticky top-0 z-10">
      <section className="  max-w-[1440px] mx-auto bg-secondary">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow  text-white font-bold  rounded-box w-52"
              >
                <li className="hover:text-info duration-150">
                  <Link to="/">Home </Link>
                </li>
                <li className="hover:text-info duration-150">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-info duration-150">
                  <a href="#about">About</a>
                </li>
                <li className="hover:text-info duration-150">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <Link to="/">
              {" "}
              <img
                src="https://i.ibb.co/6XjZYCy/creative-2.png "
                alt=""
                className="h-12 w-12 mr-2 "
              />
            </Link>
            <Link to="/">
              <p className="text-white text-xl font-semibold tracking-wider ">
                Saifulla
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden text-white font-semibold lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li className="hover:text-info duration-150">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-info duration-150">
                <a href="#service" className="">
                  Service
                </a>
              </li>
              <li className="hover:text-info duration-150">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-info duration-150">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-info duration-150">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-info duration-150">
                <NavLink to="/blog">Blog </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end text-white">
            <a
              href="#contact"
              className="btn hover:text-white tracking-wide text-accent bg-info"
            >
              Hire ME
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
