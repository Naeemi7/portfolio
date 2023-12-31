import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar from "@images/navbar/avatar.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Close the menu when the location changes
    closeMenu();
  }, [location]);

  // Define a function to set styles for the active NavLink
  const getNavLinkStyles = (path) => {
    // Define the default styles
    const defaultStyles = {
      color: "white",
    };

    // Define the active styles
    const activeStyles = {
      backgroundColor: "#ff6a3d",
      color: "white",
    };

    // Check if the current path matches the NavLink's "to" prop
    if (location.pathname === path) {
      return activeStyles;
    } else {
      return defaultStyles;
    }
  };

  return (
    <>
      <nav className="bg-primary border-gray-200 dark:bg-primary fixed top-0 left-0 right-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Avatar Image */}
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={avatar}
            alt="Bordered avatar"
          />

          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus-ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus-ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-2 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-trasparent dark:bg-primary md:dark-bg-primary">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-primary rounded md:bg-transparent md-text-h1Color md-p-0 dark-text-white md-dark-text-h1Color text-lg"
                  aria-current="page"
                  onClick={closeMenu}
                  style={getNavLinkStyles("/")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-h1Color md-p-0 dark-text-white md-dark-text-h1Color text-lg"
                  onClick={closeMenu}
                  style={getNavLinkStyles("/skills")}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-h1Color md-p-0 dark-text-white md-dark-text-h1Color text-lg"
                  onClick={closeMenu}
                  style={getNavLinkStyles("/projects")}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-border-0 md-hover-text-h1Color md-p-0 dark-text-white md-dark-text-h1Color text-lg"
                  onClick={closeMenu}
                  style={getNavLinkStyles("/contact")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
