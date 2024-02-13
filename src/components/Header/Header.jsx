import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to='/'>
            <span
              style={{ fontFamily: "Birthstone Bounce" }}
              className="text-2xl lg:text-3xl  text-gray-800 hover:bg-blue-500"
            >
              coders_war..
            </span>
          </Link>
          <div className="hidden lg:flex" id="mobile-menu-2">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <NavLink
                  to="/"
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className="navlink text-base font-bold text-gray-800     transition ease-out duration-300 relative "
                  style={{ outline: "none" }}
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header >
  );
}