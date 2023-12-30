import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const FareBd = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const images = [
    "https://i.ibb.co/7RNtCTh/farebd.jpg",
    "https://i.ibb.co/B3zh3MF/farebd2.jpg",
    "https://i.ibb.co/VThRghw/farebd-Dashboardejpg.jpg",
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-12">
      <div className="mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
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
        <h1 className="text-3xl my-4 text-white">FareBD</h1>
        <p>Group Project | Role: Leader</p>
        <p>
          {" "}
          House sale and rental website Where the house owner can sell the house
          and pay the rent, Tenant can buy house can take rent. Functionality
          can be used in a variety of ways.
        </p>
        <ul className="my-2">
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Seller can add property, Buyer can buy, rent or add to Wishlist,
            payment with cards, Buyer can search property by Search Field.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Different types of users (Buyer/Seller/Admin) based interactive
            dashboard.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            User type verification with custom hooks, user login & registration
            system.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Dashboard for Buyer/Seller/Admin
          </li>
        </ul>
        <p>
          Technologies: Next.js, Express.js, Firebase, MongoDB, Tailwind CSS,
          Flowbite, Stripe, TanStack Query, React Icons, React Hot Toast,
          SwiperJS, Custom Hooks.
        </p>
      </div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
        <a
          className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
          href="https://farebd-9.web.app/"
        >
          Live Site
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/FareBD"
        >
          GitHub Client
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/Server-FareBD"
        >
          GutHub Server
        </a>
      </span>
    </div>
  );
};

export default FareBd;
