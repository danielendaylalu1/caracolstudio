import Link from "next/link";

import NavigationLinks from "@/components/NavigationLinks";
import ActLink from "@/components/ActLink";
import VideoBg from "@/components/VideoBg";
import HomeLogo from "@/components/HomeLogo";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="">
      <div className="HEADER section-header min-h-[100vh] p-4">
        <VideoBg />

        <div className="HEADERTITLES flex max-[985px]:flex-col max-[985px]:space-x-0 space-y-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
          <Link
            href="/"
            className="header-link max-[685px]:text-[24px] max-[685px]:py-8  text-[56px] py-16 text-center min-w-[450px] border border-white font-bold text-white inline-block mt-8"
          >
            DESIGN
          </Link>
          <div className="flex flex-col space-y-4 items-center">
            <Link
              href="/"
              className="header-link max-[685px]:text-[24px] max-[685px]:py-8  text-[56px] py-16 text-center min-w-[450px] border border-white font-bold text-white inline-block"
            >
              FACTORY
            </Link>
            <Link
              href="/robotics"
              target="_blank"
              className="header-link max-[685px]:text-[24px] max-[685px]:py-8 text-[56px] py-16 text-center min-w-[450px] border border-white font-bold text-white inline-block"
            >
              ROBOTIC
            </Link>
          </div>
        </div>
      </div>
      <div className="NAVIGATION section-navigation h-[100vh] bg-black flex flex-col">
        <NavigationLinks link="/about" title="ABOUT US" />
        <div className="nav-link w-full h-[20%] flex items-center justify-between max-lg:px-8 px-[20rem] border-b border-white">
          <p className="text-3xl text-[#5d5d5d] font-medium">ACTIVITIES</p>
          <ul className="act-links flex flex-col">
            <ActLink link="/" title="DESIGN" />
            <ActLink link="/robotics" title="ROBOTICS" />
            <ActLink link="/" title="FACTORY" />
          </ul>
        </div>
        <NavigationLinks
          link=" https://www.pexels.com/it-it/"
          title="PARTNER IMMAGINI"
        />
        <NavigationLinks link="http://lenostube.com" title="PARTNER VIDEO" />
        <NavigationLinks
          link="mailto:contact@caracolstudio.it"
          title="CONTACT"
        />
      </div>
    </main>
  );
}
