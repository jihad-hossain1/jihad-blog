import Navbar from "@/components/Navbar";
import React from "react";

const WithLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <footer>
        <a href="">Footer</a>
      </footer>
    </div>
  );
};

export default WithLayout;
