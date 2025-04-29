import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Website Information */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold mb-2">WorldVisaDesk</h3>
            <img
              className=" w-10"
              src="https://img.icons8.com/?size=50&id=2487&format=png"
              alt=""
            />
          </div>
          <p className="text-sm">
            WorldVisaDesk is a visa management and information services
            platform. We ensure easy, fast and accurate visa information.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} VisaConnect. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/allvisa" className="text-sm hover:underline">
                All Visas
              </a>
            </li>
            <li>
              <a className="text-sm hover:underline">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm mt-2">
            Email us:{" "}
            <a
              href="mailto:support@visaconnect.com"
              className="hover:underline"
            >
              mdsiamislam663@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
