import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
          <h5>
            &copy; {new Date().getFullYear()} Earthly Delights. All rights
            reserved.
          </h5>
        </div>
    </footer>
  );
};

export default Footer;
