// src/components/shared/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} YourCompanyName. All rights reserved.
        </p>

        {/* Right Section */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="mailto:contact@yourcompany.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
