import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Lightbox from "./Lightbox";

const ShovonsGallery = () => {
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
          <h1 className="text-3xl my-4 text-gray-800 font-semibold">
            Shovon's Gallery
          </h1>
          <p className="text-gray-700 ">Sep 2023 - Nov 2023</p>

          <ul className="my-2">
            <li className="flex mx-2 my-4">
              <span className="mx-4 mt-1">
                <FaCheckCircle></FaCheckCircle>
              </span>{" "}
              **E-commerce Platform (Shovon Gallery):** - Developed using MERN
              stack (MongoDB, Express.js, React.js, Node.js), Shovon Gallery is
              a feature-rich e-commerce platform specializing in artificial
              ornaments and antique jewelry.
            </li>
            <li className="flex mx-2 my-4">
              <span className="mx-4 mt-1">
                <FaCheckCircle></FaCheckCircle>
              </span>{" "}
              **User-Centric Features:** - Buyers can seamlessly navigate and
              purchase products, utilizing essential e-commerce functionalities
              such as an integrated shopping cart, secure SSLCommerz payment
              methods, and a wishlist for saving preferred items. - User
              authentication and registration leverage Firebase, providing a
              secure and efficient login process, with additional convenience
              through Google login.
            </li>
            <li className="flex mx-2 my-4">
              <span className="mx-4 mt-1">
                <FaCheckCircle></FaCheckCircle>
              </span>{" "}
              **Comprehensive Buyer Dashboard:** - A dedicated dashboard
              empowers buyers with a personalized space to manage their orders,
              wishlist, reviews, and questions about products. The intuitive
              layout enhances user experience, offering a centralized hub for
              all interactions and transactions.
            </li>
            <li className="flex mx-2 my-4">
              <span className="mx-4 mt-1">
                <FaCheckCircle></FaCheckCircle>
              </span>{" "}
              **Admin Control and Management:** - Administrators (sellers) have
              robust control over the platform, including the ability to add,
              edit, or remove products and categories. Admins can manage product
              availability status, answer customer questions, and even update
              user roles directly from the dashboard, ensuring seamless
              operational control.
            </li>
          </ul>
          <p>
            # Technology Used: ReactJS, Tailwind, Flowbite, Node.js, ExpressJS,
            MongoDB, Firebase, React Icons, React Toastify, SwiperJS, Custom
            Hooks. SSLCommcez.
          </p>
        </div>
        <div className="btn-group m-6">
          <a
            href="https://shovon-sgallery.web.app/"
            className="btn hover:bg-gradient-to-r from-primary to-secondary"
          >
            Live Site
          </a>

          <a
            href="https://github.com/SaifullaJubair/shovon-gallery-client"
            className="btn hover:bg-gradient-to-r from-primary to-secondary"
          >
            GitHub Client
          </a>

          <a
            href="https://github.com/SaifullaJubair/shovon-gallery-server"
            className="btn hover:bg-gradient-to-r from-primary to-secondary"
          >
            {" "}
            GutHub Server
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShovonsGallery;
