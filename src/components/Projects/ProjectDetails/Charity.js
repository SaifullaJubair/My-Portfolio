import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const Charity = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const images = [
    "https://i.ibb.co/bv7nTRW/Screenshot-2024-02-12-054317.png",
    "https://i.ibb.co/5xZ5GyJ/Screenshot-2024-02-12-054402.png",
    "https://i.ibb.co/LgFQLbC/Screenshot-2024-02-12-054447.png",
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-12">
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="cursor-pointer hover:shadow-md hover:scale-105 duration-200 border border-gray-200 h-full"
              alt=""
              onClick={() => openLightbox(imageUrl)}
            />
          ))}
        </div>
        {lightboxImage && (
          <Lightbox imageUrl={lightboxImage} onClose={closeLightbox} />
        )}
      </div>
      <div className="lg:max-w-3xl mx-2">
        <h1 className="text-3xl my-4 text-gray-700 font-semibold">
          Charity (Donation Management System)
        </h1>
        <p>
          The Charity Donation Management System is a comprehensive web
          application designed to facilitate and streamline the donation process
          for various charitable causes. Built as a full-stack project, it
          utilizes cutting-edge technologies to offer users a secure and
          user-friendly experience. The system caters to two primary user roles:
          regular users who can make donations, and administrators who oversee
          and manage the entire platform.
        </p>
        {/* <ul className="my-2">

          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Users can views categories book product and paid with card.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Buyer/Seller Authentication with Gmail and password as well as
            Social Login.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Dashboard for Buyer/Seller/Admin
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Update, deleted, reported product if the buyers wants
          </li>
        </ul> */}
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          User Authentication:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Secure user registration and login facilitated by Firebase
            authentication.
          </li>
          <li>Two distinct user roles: regular users and administrators.</li>
        </ul>

        <h2 className="text-2xl  my-4 text-gray-700 font-semibold">
          Dashboard Functionality:
        </h2>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Regular User Dashboard:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Accessible after login, displaying donation history and personalized
            information.
          </li>
          <li>
            Provides insights into individual contributions and relevant
            statistics.
          </li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Admin Dashboard:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Centralized hub for administrators to manage causes users, and view
            key statistics.
          </li>
          <li>
            Enables efficient cause management, user role updates, and
            statistical analysis.
          </li>
        </ul>
        <h2 className="text-2xl  my-4 text-gray-700 font-semibold">
          Donation Functionality:
        </h2>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          User Donations:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>Users can make secure donations to causes of their choice.</li>
          <li>
            Integration with a reliable payment gateway ensures the safety of
            financial transactions.
          </li>
          <li>
            Donation details include user information, cause details, and
            contribution amount.
          </li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          User Profile:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Users can view their donation history and other relevant information
            on a dedicated donation and Statistic page.
          </li>
          <li>
            Admins have access to user profiles, allowing them to manage user
            roles.
          </li>
        </ul>
        <h2 className="text-2xl  my-4 text-gray-700 font-semibold">
          Statistics Visualization:
        </h2>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Admin Analytics:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Visual representation of crucial statistics related to total funds
            raised and distribution across causes.
          </li>
          <li>
            Pie chart integration for a clear and concise overview of donation
            distribution.
          </li>
        </ul>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Frontend Framework:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Next.js is employed for frontend development, providing server-side
            rendering and a seamless user interface.
          </li>
          <li>
            Redux manages state, ensuring smooth and efficient data flow within
            the application.
          </li>
        </ul>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Backend Infrastructure:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Express.js serves as the backend framework, handling data
            interactions and user requests.
          </li>
          <li>
            MongoDB stores cause and user-related data, ensuring efficient
            retrieval and management.
          </li>
        </ul>

        <h2 className="text-2xl my-2 text-gray-700 font-semibold">
          Conclusion:
        </h2>
        <hr />
        <p className="m-2 ">
          Charity serves as a robust and feature-rich platform, empowering
          organizations to manage charitable activities seamlessly. By
          leveraging modern technologies, it provides a scalable and resilient
          solution, ensuring long-term success in the realm of philanthropy and
          community engagement.
        </p>

        {/* Technology */}
        <p className="my-4">
          <span className="text-gray-700   font-semibold text-xl">
            Technologies:
          </span>{" "}
          Next.Js - 14.1.0, React Redux, Redux Thunk, Redux Toolkit Query,
          Firebase Authentication, Taiwind CSS, Ant Design, Express.js, Node.js,
          MongoDB, Vercel.
        </p>
      </div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
        <a
          className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
          href="https://charity-client.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/charity-client-site"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Client
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/charity-server"
          target="_blank"
          rel="noreferrer"
        >
          GutHub Server
        </a>
      </span>
    </div>
  );
};

export default Charity;
