import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Import stylesheets if not already imported in your main component file

export const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 space-x-5 text-2xl">
              {/* Add Link components instead of <a> tags */}
              <Link to="#" className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-facebook-square"></i>
              </Link>
              <Link to="#" className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                <i className="fab fa-dribbble"></i>
              </Link>
              <Link to="#" className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4">
                <i className="fab fa-github"></i>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  {/* Use NavLink for internal links */}
                  <li>
                    <NavLink to="/about" className="navlink text-base font-semibold text-gray-700 transition ease-out duration-300 relative "
                      style={{ outline: "none" }}
                    >About Us
                    </NavLink>
                  </li>
                  {/* Add more NavLink components as needed */}
                  <li>
                    <NavLink to="/contact-us" className="navlink text-base font-semibold text-gray-700 transition ease-out duration-300 relative "
                      style={{ outline: "none" }}
                    >Contact us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    {/* Use NavLink for internal links */}
                    <NavLink to="https://github.com/coder-deep1"
                      className="navlink text-base font-semibold text-gray-700 transition ease-out duration-300 relative "
                      style={{ outline: "none" }}
                    >GitHub
                    </NavLink>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


