import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const LensBD = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const images = [
    "https://i.ibb.co/c17fKRm/Screenshot-2024-02-03-015644.png",
    "https://i.ibb.co/P41vmjj/Screenshot-2024-02-03-015820.png",
    "https://i.ibb.co/gMkBRHs/Screenshot-2024-02-03-015924.png",
    "https://i.ibb.co/XkJwxbW/Screenshot-2024-02-03-015857.png",
    "https://i.ibb.co/jW3SzpG/Screenshot-2024-02-03-015956.png",
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-12">
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="cursor-pointer hover:shadow-md hover:scale-105 duration-200  border border-gray-200  h-full"
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
          LensBD (Eye Glasses Management Dashboard)
        </h1>
        <p>
          LensBD is a comprehensive Eye Glasses Management Dashboard designed to
          streamline the management of eyeglasses inventory and sales. This
          full-stack project utilizes cutting-edge technologies to provide a
          seamless and efficient experience for users.
        </p>
        <hr className="my-2" />
        <h2 className="text-2xl  mt-4 text-gray-700 font-semibold">
          Projects Link:
        </h2>
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
          <a
            className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
            href="https://lensbd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>

          <a
            className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
            href="https://github.com/SaifullaJubair/lens-bd-client"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Client
          </a>

          <a
            className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
            href="https://github.com/SaifullaJubair/lens-bd-server"
            target="_blank"
            rel="noreferrer"
          >
            GutHub Server
          </a>
        </span>
        <hr className="my-2" />

        {/* Technology */}
        <p className="my-4">
          <span className="text-gray-700   font-semibold text-xl">
            Technologies:
          </span>{" "}
          Vite.Js, TypeScript, Redux, Redux Thunk, Redux Toolkit Query, React
          Router DOM, Firebase Authentication, Taiwind CSS, Meterial Tailwind,
          Express.js, Node.js, MongoDB, Vercel.
        </p>
        <hr className="my-2" />
        <h2 className="text-2xl  my-4 text-gray-700 font-semibold">
          Features:
        </h2>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Authentication:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            User-friendly authentication system for secure access to the
            dashboard.
          </li>
          <li>
            Registration and login functionality using Firebase authentication.
          </li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Dashboard Overview:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Intuitive dashboard providing a quick overview of essential metrics.
          </li>
          <li>
            Real-time updates on inventory status, sales, and recent activities.
          </li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Inventory Management:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Comprehensive inventory management system with CRUD operations.
          </li>
          <li>Add, delete, and edit individual items with ease.</li>
          <li>Duplicate functionality to streamline item creation.</li>
          <li>Bulk delete for efficient mass operations.</li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Sales History:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>Detailed sales history.</li>
          <li>Filtering options by day, month, and year.</li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Lenses Page:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>Centralized page displaying all available lenses.</li>
          <li>
            Advanced search functionality for quick retrieval of specific items.
          </li>
          <li>Filters for sorting lenses by category, brand, and gender.</li>
        </ul>

        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Redux RTK Query:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Integration of Redux Toolkit Query for efficient state management.
          </li>
          <li>
            Advanced search functionality for quick retrieval of specific items.
          </li>
          <li>Optimized data fetching and caching for improved performance.</li>
        </ul>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          User Interface:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>Responsive and user-friendly design for seamless navigation.</li>
          <li>
            Intuitive forms and controls for easy data input and manipulation.
          </li>
        </ul>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          Express Node Backend:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>
            Robust Express Node backend for handling server-side operations.
          </li>
          <li>Secure endpoints for CRUD operations on the database.</li>
        </ul>
        <h2 className="text-xl flex items-center gap-2 my-4 text-gray-700 font-semibold">
          <span className="mr-1">
            <FaCheckCircle></FaCheckCircle>
          </span>{" "}
          MongoDB Database:
        </h2>
        <ul className="my-2 list-disc ml-10 ">
          <li>MongoDB database for scalable and efficient data storage.</li>
          <li>Ensures data integrity and reliability for long-term use.</li>
        </ul>

        <h2 className="text-2xl my-2 text-gray-700 font-semibold">
          Conclusion:
        </h2>
        <hr />
        <p className="m-2 ">
          LensBD stands as a powerful and feature-rich Eye Glasses Management
          Dashboard, providing businesses with the tools they need to streamline
          inventory management and enhance customer satisfaction. The use of
          modern technologies ensures a scalable and robust solution for
          long-term success.
        </p>
      </div>
    </div>
  );
};

export default LensBD;
