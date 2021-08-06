import React from "react";

function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="admin-footer">
      <p className="footer-text">Copyright ©{thisYear }. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
