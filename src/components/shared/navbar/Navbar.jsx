"use client";

import React from "react";
import logoImg from "@/assets/img/logo.png";
import Image from "next/image";
import MyLink from "../MyLink";
import { signOut, useSession } from "@/app/lib/auth-client";
import Button from "daisyui/components/button";
import Link from "next/link";

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
  {
    path: "/protected",
    text: "Protected"
  }
];

const Navbar = () => {
  const { data, isPending } = useSession();

  if (isPending) {
    return <h4>Loading...</h4>;
  }
  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-2 container mx-auto">
        <Image src={logoImg} alt="PH play store logo" className="w-8 h-8" />

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
        {data?.user ? (
          <div className="flex items-center gap-4">
            <h4
              className="text-sm text-purple-500 font-bold
            "
            >
              Welcome, {data.user.name}
            </h4>
            <button
              className=" btn text-sm bg-purple-500
            "
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link href={"/auth/signin"}>
            <button className="btn bg-purple-500">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
