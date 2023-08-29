import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-white dark:bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0 flex items-center md:order-1 order-2">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
        </div>
        <div className="md:order-2 order-1">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow Me
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex space-x-5 sm:justify-center sm:mt-0">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebook className="w-10 h-10" />
                <span className="sr-only">Facebook page</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="w-10 h-10" />
                <span className="sr-only">GitHub account</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulwase-naeemi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin className="w-10 h-10" />
                <span className="sr-only">LinkedIn account</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:abdulwasenaeemi7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <SiGmail className="w-10 h-10" />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Abdulwase Naeemi™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
