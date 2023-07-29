// "use client";
import React from "react";

const Template = ({ children }) => {
  console.log("from tamplete layout");
  return (
    <div>
      <button className="px-2 rounded border border-cyan-300 shadow ">
        wow
      </button>
      {children}
    </div>
  );
};

export default Template;
