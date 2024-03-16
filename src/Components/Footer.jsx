// Footer.js

import React from "react";
import "./Styles/Books.css";

const Footer = () => {
  return (
    <footer
      className=" text-light text-center py-3 mt-4"
      style={{
        background: "#444444  ",
      }}
    >
      <div className="container cardbody">
        <p>&copy; {new Date().getFullYear()} Bookify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
