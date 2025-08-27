import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, NAV_LINKS } from "../../data/constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="CODEnPIXEL" className="h-24 w-auto" />
            </div>
            <p className="text-gray-400">
              Empowering students with remote internship opportunities in
              technology.
            </p>
          </div>

          {/* Rest of the footer code remains the same */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-white transition"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.socialMedia.facebook}
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.twitter}
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.instagram}
                className="text-gray-400 hover:text-white transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={COMPANY_INFO.socialMedia.linkedin}
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
          <p>&copy; 2025 CODEnPIXEL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
