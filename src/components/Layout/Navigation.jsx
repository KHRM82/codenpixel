import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/constants";

const Navigation = ({ isMobile = false, onLinkClick }) => {
  const location = useLocation();

  return (
    <nav
      className={
        isMobile
          ? "flex flex-col space-y-4"
          : "hidden md:flex items-center space-x-8"
      }
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`nav-link ${
            location.pathname === link.path ? "text-white" : "text-gray-300"
          } hover:text-white transition`}
          onClick={onLinkClick}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
