import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-4 w-full bg-transparent text-white p-4">
      <ul>
        {/* <li className="text-center text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} Zylos. All rights reserved.
            </li> */}
        <li className="text-center text-gray-500 text-sm">
          Designed and developed ❤️ by{" "}
          <a
            href="https://github.com/codexadarsh"
            className="text-blue-500 hover:underline"
          >
            Adarsh
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
