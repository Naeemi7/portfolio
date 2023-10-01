import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary border-gray-200 dark:bg-primary">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Digital Portfolio™
          </a>
          . All Rights Reserved.
        </span>

        <div className="flex items-center mt-3 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-h2Color hover:text-buttonColor mr-4 text-xl md:text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-h2Color hover:text-buttonColor mr-4 text-xl md:text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-h2Color hover:text-buttonColor mr-4 text-xl md:text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
