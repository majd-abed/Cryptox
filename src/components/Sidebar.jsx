import React from "react";
import { Link } from "react-router-dom";
import { linksData } from "../data";
import { useGlobal } from "../context";
import clsx from "clsx";

const Sidebar = () => {
  const { isSidebarOpen,switchSidebar } = useGlobal();
  return (
    <div
      className={clsx(
        "duration-300 lg:hidden w-screen h-screen fixed top-[3.55rem] bg-white z-50",
        { "-translate-x-full": isSidebarOpen },
        { "translate-x-0": !isSidebarOpen }
      )}>
      <ul className='z-0 flex-cols  '>
        {linksData.map((link) => {
          const { id, name, url, icon } = link;
          return (
            <li className='border-b last:border-b-0 first:border-t' key={id}>
              <Link
                to={url}
                onClick={switchSidebar}
                className='flex items-center text-xl  h-14 px-2 hover:bg-slate-100 text-blue-900 hover:pl-4 duration-300'>
                <div className='mr-1 '>{icon}</div>
                <p className='font-Cairo'>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
