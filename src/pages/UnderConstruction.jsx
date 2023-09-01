import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import image from "../assets/images/under-construction/maintainance.jpg";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen lg:h-auto">
      {/* Left Row for Content */}
      <div className="lg:w-1/2 bg-white dark:bg-primary flex items-center justify-center h-screen lg:h-auto">
        <div className="py-8 px-4 max-w-screen-md text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 dark:text-white">
            Portfolio Under Construction
          </h1>
          <p className="font-light text-gray-500 text-lg lg:text-xl dark:text-gray-400">
            Hello, I'm Abdulwase Naeemi, a Web Developer and IT Professional. My
            portfolio is currently undergoing maintenance to bring you exciting
            updates and projects. Please check back soon!
          </p>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/abdulwase-naeemi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-h2Color hover:text-buttonColor mr-4"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-10 w-10" />
            </a>
            <a
              href="https://github.com/Naeemi7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-h2Color hover:text-buttonColor"
            >
              <FontAwesomeIcon icon={faGithub} className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Row for Under Construction Image */}
      <div className="lg:w-1/2 bg-blue-500 flex items-center justify-center lg:h-screen">
        <img
          src={image}
          alt="Under Construction"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default UnderConstruction;
