import React, { useRef } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3h4hqit",
        "template_vl7prxj",
        form.current,
        "F5eN-EoZxqJ61DDG_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Your message sent successfully");
  };

  return (
    <section
      id="contact"
      className="py-6 dark:bg-primary dark:text-gray-50 pb-24"
    >
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6 my-6">
          <h1 className="text-5xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4 text-lg ">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Khulna, Bangladesh</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+880 1923868397</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>saifullajubair6@gmail.com</span>
            </p>
            <div className="flex gap-3 text-3xl md:place-self-center md:justify-self-end">
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/saifulla-jubair/"
                title="LinkedIn"
                className="flex items-center"
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/SaifullaJubair"
                title="GitHum"
                className="flex items-center p-1"
              >
                <FaGithub className=""></FaGithub>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/saifullajubair.saiful"
                title="Facebook"
                className="flex items-center p-1"
              >
                <FaFacebook></FaFacebook>
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              name="name"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 border border-white px-3 py-2 mt-2"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              name="email"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-violet-400 dark:bg-gray-800 border border-white mt-2"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1">Subject</span>
            <input
              type="text"
              name="subject"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 px-3 py-2 focus:ring-violet-400 dark:bg-gray-800 border border-white mt-2"
              required
            />
          </label>
          <label className="block">
            <span className="mb-2">Message</span>
            <textarea
              rows="3"
              name="message"
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800 border-white border my-2 p-3"
              required
            ></textarea>
          </label>
          <button className="btn bg-gradient-to-r  text-lg from-primary text-white to-secondary hover:text-info duration-250">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
