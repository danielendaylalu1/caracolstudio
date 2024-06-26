"use client";

import React, { useState } from "react";

import Image from "next/image";
import logo from "../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import SocialLinks from "@/components/SocialLinks";
import NavItems from "./NavItems";

const NavBar = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <>
      <NavItems showStyle={showNavItems ? "show" : ""} />
      <div
        className={`NAV flex flex-col justify-between border-l border-l-white right-0 top-0 max-[1100]:h-auto h-[100vh] bg-[#f7f7f057] absolute`}
      >
        <div className="NAVLOGO flex flex-col items-center px-1 py-4 space-y-3">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[64px] mt-2" />
          </Link>
          <IoMenuSharp
            size={32}
            className="self-center font-bold cursor-pointer"
            onClick={() => {
              setShowNavItems(!showNavItems);
            }}
          />
        </div>
        <div className="NAVLINKS flex flex-col ">
          <SocialLinks link="/">
            <FaFacebookF />
          </SocialLinks>
          <SocialLinks link="/">
            <PiInstagramLogoLight />
          </SocialLinks>
          <SocialLinks link="/">
            <FaLinkedinIn />
          </SocialLinks>
        </div>
      </div>
    </>
  );
};

export default NavBar;
