import React from "react";

const About = () => {
  return (
    <section id="about" className=" bg-accent">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-6 md:mb-8 text-white">
          <div>
            <h2 className=" mb-5 font-sans text-3xl font-bold tracking-tight sm:text-4xl md:mb-6 group text-center">
              <span className="inline-block mb-1 sm:mb-4 text-5xl">
                About Me
              </span>
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            <p className="lg:max-w-3xl mx-auto">
              <div className="mt-1">
                Hey there! I'm MD Saifulla Jubair, a passionate MERN Stack
                Developer hailing from the vibrant city of Khulna, Bangladesh.
                My journey into the world of web development started with a
                profound fascination for creating seamless, user-friendly
                digital experiences.
              </div>{" "}
              <br />
              <div className="mt-1">
                As a graduate with a keen interest in Physics, I embarked on a
                path of continuous learning and growth. Alongside my academic
                pursuits at Government Sundarban Adarsha College, I delved into
                the realm of web development. My thirst for knowledge led me to
                enroll in the Complete Web Development Course at Programming
                Hero, where I honed my skills and earned a certification in
                2022.
              </div>{" "}
              <br />
              <div className="mt-1">
                The capstone of my educational journey marked the completion of
                the course, equipping me with expertise in a diverse range of
                technologies. From mastering React and Node.js to navigating the
                intricacies of MongoDB and Firebase, I've embraced the MERN
                stack with enthusiasm.
              </div>{" "}
              <br />
              <div className="mt-1">
                One of my standout achievements is the development of
                Shovon’sGallery, an e-commerce platform showcasing artificial
                ornaments and antique jewelry. This project not only reflects my
                technical prowess in ReactJS, Tailwind, Node.js, and more but
                also underscores my commitment to user-centric design, featuring
                elements like SSLCommcez for secure payments and Firebase for
                seamless user authentication.
              </div>{" "}
              <br />
              <div className="mt-1">
                I also took the reins as a leader in the FareBD project, an
                innovative house rental and selling app. Guiding a dynamic team,
                I oversaw the implementation of user type verification, seamless
                buyer-seller interactions, and integration with technologies
                like Stripe and TanStack Query.
              </div>{" "}
              <br />
              <div className="mt-1">
                Beyond coding, my proficiency extends to tools like GitHub,
                VSCode, and design applications like Photoshop and Figma. Fluent
                in both Bangla and English, I bring a holistic skill set and a
                creative edge to every project.
              </div>
              <br />
              <div className="mt-1">
                In a nutshell, I'm on a continuous journey of growth,
                exploration, and creation in the ever-evolving landscape of web
                development. Excited to connect, collaborate, and bring digital
                visions to life!
              </div>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
