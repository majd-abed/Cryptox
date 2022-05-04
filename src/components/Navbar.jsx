import React from "react";
import { NavLink } from "react-router-dom";
import { linksData } from "../data";
import { Logo, Container, SidebarButton, Dropdown } from "./";
import { useGlobal } from "../context";
import clsx from "clsx";
const Navbar = () => {
  const { switchSidebar } = useGlobal();
  return (
    <>
      <div className='w-1 h-[3.7rem]'></div>
      <nav className='border-b fixed w-screen bg-white top-0 z-10'>
        {/*container*/}
        <Container>
          <div className='flex'>
            <Logo />
            <div className='flex flex-1 justify-end'>
              <div className=' lgx:hidden'>
                <ul className='flex justify-between gap-2'>
                  {linksData.map((link) => {
                    const { id, name, url, icon } = link;
                    return (
                      <li key={id}>
                        <NavLink
                          to={url}
                          className={({ isActive }) =>
                        clsx(
                          "flex items-center text-xl h-11 my-2 px-2 hover:bg-slate-50 hover:rounded-md duration-300 text-blue-900",
                          {
                            "bg-[#fbfbfb] rounded-md": isActive,
                          }
                        )
                      }>
                          <div className='mr-1 '>{icon}</div>
                          <p className='font-Cairo'>{name}</p>
                        </NavLink>
                      </li>
                        
                    );
                  })}
                </ul>
              </div>
              {/* dropdown */}
              <div className='flex items-center w-14'>
                <Dropdown />
              </div>
              <button
                className='pr-4 lg:hidden flex items-center text-blue-900 overflow-hidden'
                onClick={switchSidebar}>
                <SidebarButton />
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
export default Navbar;
