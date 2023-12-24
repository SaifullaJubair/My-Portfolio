import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const MoboSell = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const images = [
    "https://i.ibb.co/y6tXmWg/Screenshot-2022-12-11-233141.jpg",
    "https://i.ibb.co/S7Dy68c/Screenshot-2022-12-11-233209.jpg",
    "https://i.ibb.co/t4M6rhD/Screenshot-2022-12-11-233347.jpg",
  ];
  return (
    <div className="max-w-[1320px] mx-auto my-12">
      <div>
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
        <h1 className="text-3xl my-4 text-white">MoboSell</h1>
        <p>
          This is a 2nd hand Mobile Selling Website. Here seller can sell their
          phone and buyer can purchase phone.This website has stripe payment
          system and firebase authentication with JWT security
        </p>
        <ul className="my-2">
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
        </ul>
        <p>
          Technologies: Tailwind CSS, React, React-Router-DOM, Firebase, JWT,
          MongoDB, Express, Node. Stripe, daisyUI
        </p>
      </div>
      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
        <button
          className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
          href="https://mobosell-a12.web.app/"
        >
          Live Site
        </button>

        <button
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/MogoSell"
        >
          GitHub Client
        </button>

        <button
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/MoboSell-Server"
        >
          GutHub Server
        </button>
      </span>
    </div>
  );
};

export default MoboSell;
