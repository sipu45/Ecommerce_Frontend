import React from "react";

const BackDrop = ({ data, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`fixed z-20 transition-all duration-200 opacity-50 w-screen h-screen bg-slate-300 ${
        data ? "top-16" : "top-0"
      } left-0`}
    />
  );
};

export default BackDrop;