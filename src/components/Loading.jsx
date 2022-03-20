import React from "react";
import { HashLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
      <HashLoader size={70} color='#1e3a8a' />
    </div>
  );
};

export default Loading;
