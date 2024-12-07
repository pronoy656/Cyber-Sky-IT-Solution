import React from "react";
import { NavLink } from "react-router-dom";

import { RiHome4Line } from "react-icons/ri";
import { TiThSmallOutline } from "react-icons/ti";
import { RiGalleryView2 } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { GoVideo } from "react-icons/go";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink to={"/"} className="flex justify-center items-center">
        <li>
          <a className="hover:text-orange-500 transition-colors">
            <RiHome4Line size={24} />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/blog"} className="flex justify-center items-center">
        <li>
          <a className="hover:text-orange-500 transition-colors">
            <RiGalleryView2 size={24} />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/comment"} className="flex justify-center items-center">
        <li>
          <a className="hover:text-orange-500 transition-colors">
            <BsSend size={24} />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/video"} className="flex justify-center items-center">
        <li>
          <a className="hover:text-orange-500 transition-colors">
            <GoVideo size={24} />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/allItems"} className="flex justify-center items-center">
        <li>
          <a className="hover:text-orange-500 transition-colors">
            <TiThSmallOutline size={24} />
          </a>
        </li>
      </NavLink>
    </>
  );

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <ul className="text-lg space-y-10">{navLink}</ul>
      </div>

      {/* Mobile View */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md md:hidden">
        <ul className="flex justify-around items-center p-4">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
