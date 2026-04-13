import React from "react";
import logoImg from "@/assets/img/logo.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image"
import MyLink from "../MyLink";


const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
        <Image
          src={logoImg}
          alt="PH play store logo"
          className="w-8 h-8"
        />

        <ul className="flex justify-between gap-2 items-center">
          <div className="flex items-center gap-4">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}
          </div>

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;