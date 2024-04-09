import React from "react";

const Footer = ({ isBackgroundDark }) => {
  return (
    <footer className="footer lg:px-15 border border-top-zinc-700 border-l-transparent border-r-transparent border-b-transparent">
      <div className="container p-5 flex justify-between">
        <span className="text-lg text-gray-500">© 2024 Mkhanyisi Gamedze</span>
        <p className="text-lg text-gray-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
