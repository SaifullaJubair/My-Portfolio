import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const News71 = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (imageUrl) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };
  const images = [
    "https://i.ibb.co/NW1n6Pd/news71.jpg",
    "https://i.ibb.co/r6y7r8j/news71singlepage.jpg",
    "https://i.ibb.co/WKz85nB/news71-Dashboard.jpg",
  ];
  return (
    <div className="max-w-[1440px] mx-auto my-12">
      <div className="mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="cursor-pointer hover:shadow-md hover:scale-105 duration-200  border border-gray-200 h-full "
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
        <h1 className="text-3xl my-4 text-gray-700 font-semibold">News71</h1>
        <p>Group Project | Role: Leader</p>
        <p>
          News71 is a News Portal Website. It serves as a centralized hub where
          users can find news articles categorized by different topics and
          sections. Some features like a homepage with the latest news
          highlights.
        </p>
        <ul className="my-2">
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Two types of users (normal users and admin). Only the admin can add,
            edit, and delete news.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>
            Search functionality article categories, Like, Dislike,Comment
            functionality.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            User Authentication with Gmail and password and Social Login.
          </li>
          <li className="flex items-center mx-2">
            <span className="mr-1">
              <FaCheckCircle></FaCheckCircle>
            </span>{" "}
            Update, delete, and report news if the admin want, Dashboard for
            User /Admin.
          </li>
        </ul>
        <p>
          Technologies: Tailwind, Flowbite, NextJs, Node.js, ExpressJS, MongoDB,
          Firebase, JWT.
        </p>
      </div>

      <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
        <a
          className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
          href="https://news-71-f8a9f.web.app/"
        >
          Live Site
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/News-71"
        >
          GitHub Client
        </a>

        <a
          className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
          href="https://github.com/SaifullaJubair/news-71-server"
        >
          GutHub Server
        </a>
      </span>
    </div>
  );
};

export default News71;
