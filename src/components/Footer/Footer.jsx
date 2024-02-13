import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

// Import stylesheets if not already imported in your main component file

export const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-700">Thank you for visiting our website. </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 space-x-5 text-2xl">
              {/* Add Link components instead of <a> tags */}
              <Link to="#" className=" text-blue-700 p-2 text-3xl ">
                <TwitterIcon />
              </Link>

              <Link to="https://www.instagram.com/coders_war.in/" className="text-red-400">
                <InstagramIcon />
              </Link>
              <Link to="https://github.com/coder-deep1" className="">
                <GitHubIcon />
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


