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
    <div className="max-w-[1440px] mx-auto my-12">
      <div>
        <h1 className="font-semibold text-3xl  my-8 text-gray-700">
          FareBD: (House Rental & Selling App)
        </h1>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mx-2">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              className="cursor-pointer hover:shadow-md hover:scale-105 duration-200  border border-gray-200 h-full"
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
        <p className="text-2xl my-4 text-gray-700 font-semibold">
          Group Project | Role: Leader <br />
          <u>Project Overview</u> <br />
          Key Features:
        </p>

        <ol className="my-2 ">
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              {" "}
              User Authentication and Authorization:
            </span>
            <br />
            Implemented a secure user authentication system with email
            verification and custom hooks. Role-based access control for
            different user types: Buyer, Seller, and Admin.
          </li>
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              {" "}
              Interactive Dashboard:
            </span>
            <br />
            Created a dynamic and intuitive dashboard tailored to the needs of
            each user type. Admin dashboard for overseeing and managing both
            sellers and buyers.
          </li>
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              {" "}
              Property Management:
            </span>
            <br />
            Sellers can add properties for sale or rent, providing details and
            images. Buyers can browse, purchase, or rent properties and add them
            to their wishlist.
          </li>
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              Transaction Processing:
            </span>
            <br />
            Integrated Stripe for secure payment transactions using credit
            cards. Smooth and secure payment processing for property purchases
            or rentals.
          </li>
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              {" "}
              User-Friendly Interface:
            </span>
            <br />
            Designed a user-friendly interface with a focus on a seamless user
            experience. Implemented features like wishlist management, property
            reviews, and Q&A.
          </li>
          <li className="list-decimal mx-2">
            {" "}
            <span className="font-semibold text-gray-700">
              {" "}
              Technology Stack:
            </span>
            <br />
            <span className="font-semibold text-gray-700">Frontend:</span>{" "}
            Developed using Next.js, React, and Tailwind CSS for a responsive
            and modern UI. <br />
            <span className="font-semibold text-gray-700">Backend:</span> Built
            with Express.js and integrated with Firebase for real-time updates.{" "}
            <br />
            <span className="font-semibold text-gray-700">Database:</span>{" "}
            MongoDB for efficient data storage and retrieval. <br />
            <span className="font-semibold text-gray-700">
              State Management:{" "}
            </span>{" "}
            Utilized TanStack Query for efficient state management. <br />
            <span className="font-semibold text-gray-700">
              {" "}
              Payment Processing:
            </span>
            Integrated Stripe for secure and reliable payment transactions.{" "}
            <br />
            <span className="font-semibold text-gray-700">
              {" "}
              Additional Tools:
            </span>
            Flowbite for UI components, React Icons for iconography, SwiperJS
            for image sliders, JWT for secure authentication, and React Hot
            Toast for notification handling.
          </li>
        </ol>
        <p>
          <span className="font-semibold">Technologies:</span> Next.js,
          Express.js, Firebase, MongoDB, Tailwind CSS, Flowbite, Stripe,
          TanStack Query, React Icons, React Hot Toast, SwiperJS, Custom Hooks.
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
