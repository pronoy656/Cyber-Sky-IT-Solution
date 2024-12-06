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
      <NavLink to={"/"}>
        <li className="mb-5">
          <a>
            <RiHome4Line />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/blog"}>
        <li className="mb-5">
          <a>
            <RiGalleryView2 />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/comment"}>
        <li className="mb-5">
          <a>
            <BsSend />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/video"}>
        <li className="mb-5">
          <a>
            <GoVideo />
          </a>
        </li>
      </NavLink>
      <NavLink to={"/allItems"}>
        <li className="mb-5">
          <a>
            <TiThSmallOutline />
          </a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div>
        <ul className="text-lg space-y-10">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
