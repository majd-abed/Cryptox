import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useGlobal } from "../context";

const SidebarButton = () => {
  const { isSidebarOpen } = useGlobal();
  return (
    <>
      {isSidebarOpen ? (
        <AiOutlineBars className='h-8 w-8 hover:text-black duration-200' />
      ) : (
        <FaTimes className='h-8 w-8 hover:text-red-500 duration-200' />
      )}
    </>
  );
};

export default SidebarButton;
