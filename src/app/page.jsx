import Image from "next/image";
import textLogo from "../assets/text-logo.png";
import logo from "../assets/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="">
      <div className="section-header min-h-[100vh] bg-green-100 p-4">
        <div className="max-w-[230px]">
          <Image src={textLogo} alt="caracol studio logo" />
        </div>

        <div className="flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
          <h1 className="text-[56px] p-8 font-bold mt-8">DESIGN</h1>
          <div className="flex-col space-y-4">
            <h1 className="text-[56px] p-8 font-bold">FACTORY</h1>
            <h1 className="text-[56px] p-8 font-bold">ROBOTIC</h1>
          </div>
        </div>
        <div className="flex flex-col absolute justify-between border-l border-l-white right-0 top-0 h-[100vh]">
          <div className="flex flex-col items-center px-1 py-4 space-y-3">
            <Image src={logo} alt="logo" className="w-[64px]" />
            <div className="flex justify-center">
              <IoMenuSharp size={32} className="self-center font-bold" />
            </div>
          </div>
          <div className="flex flex-col ">
            {/* <div className="border-t flex justify-center">
              <Link href="/">
                <FaFacebookF />
              </Link>
            </div> */}
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
      </div>
      <div className="section-navigation min-h-[100vh] bg-black"></div>
    </main>
  );
}
