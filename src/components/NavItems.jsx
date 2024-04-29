import React from "react";

import ActLink from "./ActLink";

const NavItems = ({ showStyle }) => {
  console.log("navitems", showStyle);
  return (
    <ul
      className={`NAVITEMS h-[100vh] z-30 flex flex-col justify-center items-center bg-[#3f3f3e95] absolute top-0 ${showStyle}`}
    >
      <div className="flex flex-col space-y-8">
        <a
          href="/about"
          className="max-[785px]:text-lg text-2xl text-slate-200 hover:text-white"
        >
          ABOUT
        </a>
        <div className=" flex flex-col space-y-4">
          <p className="max-[785px]:text-lg text-2xl text-slate-200 hover:text-white">
            ACTIVITIES
          </p>
          <ul className="flex flex-col space-y-2 ml-4">
            <ActLink link="/" title="DESIGN" />
            <ActLink link="/robotics" title="ROBOTICS" />
            <ActLink link="/" title="FACTORY" />
          </ul>
        </div>
        <a
          href=" https://www.pexels.com/it-it/"
          target="_blank"
          className="max-[785px]:text-lg text-2xl text-slate-200 hover:text-white"
        >
          PARTNER IMMAGINI
        </a>
        <a
          href="http://lenostube.com"
          target="_blank"
          className="max-[785px]:text-lg text-2xl text-slate-200 hover:text-white"
        >
          PARTNER VIDEO
        </a>
        <a
          href="mailto:contact@caracolstudio.it"
          target="_blank"
          className="max-[785px]:text-lg text-2xl text-slate-200 hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </ul>
  );
};

export default NavItems;
