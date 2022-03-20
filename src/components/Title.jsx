import React from "react";

const Title = ({ children }) => {
  return <div>
    <h1 className="text-3xl smx:text-2xl font-semibold font-sans text-blue-800 py-5 px-2">{children}</h1>
  </div>;
};

export default Title;
