import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/images/footer/logo.png";

function Footer() {
  const SocialMediaLink = ({ href, icon, srText }) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-h2Color hover:text-gray-900 dark:hover:text-h1Color flex items-center space-x-2"
      >
        {icon}
        <span className="sr-only">{srText}</span>
      </a>
    </li>
  );

  return (
    <footer className="bg-white dark:bg-primary">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col md:flex-row md:justify-between">
        <div className="mb-6 md:mb-0 flex items-center md:order-1 order-2">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={logo}
              className="h-14 w-auto max-w-xs"
              alt="FlowBite Logo"
            />
          </a>
        </div>
        <div className="md:order-2 order-1">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Follow Me
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium flex space-x-5 sm:justify-center sm:mt-0">
            <SocialMediaLink
              href="#"
              icon={<FaFacebook className="w-9 h-9 shadow-md" />}
              srText="Facebook page"
            />
            <SocialMediaLink
              href="#"
              icon={<FaGithub className="w-9 h-9 shadow-md" />}
              srText="GitHub account"
            />
            <SocialMediaLink
              href="https://www.linkedin.com/in/abdulwase-naeemi/"
              icon={<FaLinkedin className="w-9 h-9 shadow-md" />}
              srText="LinkedIn account"
            />
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">
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
