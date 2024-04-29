import Link from "next/link";

import NavigationLinks from "@/components/NavigationLinks";
import ActLink from "@/components/ActLink";
import VideoBg from "@/components/VideoBg";

export default function Home() {
  return (
    <main className="">
      <div className="HEADER section-header min-h-[100vh] p-4">
        <VideoBg />

        <div className="HEADERTITLES flex max-[985px]:space-x-0 gap-x-8 gap-y-4 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Link
            href="/"
            className="header-link max-[685px]:text-[24px] max-[685px]:py-12   text-[56px] py-16 text-center px-8 border border-white font-bold text-white inline-block mt-8"
          >
            DESIGN
          </Link>
          <div className="flex flex-col space-y-4 items-center">
            <Link
              href="/"
              className="header-link max-[685px]:text-[24px] max-[685px]:py-12   text-[56px] py-16 text-center px-8 border border-white font-bold text-white inline-block"
            >
              FACTORY
            </Link>
            <Link
              href="/robotics"
              className="header-link max-[685px]:text-[24px] max-[685px]:py-12  text-[56px] py-16 text-center px-8 border border-white font-bold text-white inline-block"
            >
              ROBOTIC
            </Link>
          </div>
        </div>
      </div>
      <div className="NAVIGATION section-navigation h-[100vh] bg-black flex flex-col">
        <NavigationLinks link="/about" title="ABOUT US" />
        <div className="nav-link bg-[#3f3f3e95] w-full h-[20%] flex items-center justify-between max-lg:px-8 px-[20rem] border-b border-white">
          <p className="text-3xl  text-[#3f3f3e95] font-medium">ACTIVITIES</p>
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
