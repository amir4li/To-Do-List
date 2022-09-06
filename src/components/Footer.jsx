import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Developed by ⓒ<strong>AMiR ALi</strong> {currentYear}</p>
    </footer>
  );
}

export default Footer;