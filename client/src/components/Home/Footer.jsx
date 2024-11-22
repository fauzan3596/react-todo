import React from "react";
import { CgProfile } from "react-icons/cg";

function Footer() {
  return (
    <footer className="bg-transparent text-black mt-3 mb-2">
      <div className="text-center py-3">
        &copy; 2024 My Todos List. All rights reserved.
        <CgProfile className="mx-1 mb-1 text-primary" size={20} />
        Created by Fauzan Ramadhan
      </div>
    </footer>
  );
}

export default Footer;
