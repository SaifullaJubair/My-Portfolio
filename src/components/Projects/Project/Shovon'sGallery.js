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
    "https://i.ibb.co/RhJqrRd/Screenshot-2023-12-24-215500.png",
    "https://i.ibb.co/D8W6tfS/shovon-gallery-home.png",
    "https://i.ibb.co/L6LB6Nc/shovon-singlepage.png",
    "https://i.ibb.co/km3kk67/shovon-cart.png",
    "https://i.ibb.co/L0hTx7r/dahboard-shovon-gallery.png",
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
        <div className="lg:max-w-3xl my-6 mx-2">
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
        <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm my-6">
          <button
            className="inline-block px-4 py-2  font-medium text-gray-600  hover:bg-info transition hover:scale-110 focus:relative"
            href="https://shovon-sgallery.web.app/"
          >
            Live Site
          </button>

          <button
            className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
            href="https://github.com/SaifullaJubair/shovon-gallery-client"
          >
            GitHub Client
          </button>

          <button
            className="inline-block px-4 py-2  font-medium text-gray-600 hover:bg-info transition hover:scale-110 focus:relative"
            href="https://github.com/SaifullaJubair/shovon-gallery-server"
          >
            GutHub Server
          </button>
        </span>
      </div>
    </div>
  );
};

export default ShovonsGallery;
