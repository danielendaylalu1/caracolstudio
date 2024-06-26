import React from "react";

function NavigationLinks({ link, title }) {
  return (
    <a
      href={link}
      className="nav-link w-full h-[20%] flex items-center justify-between max-lg:px-8 px-[20rem] border-b border-white bg-[#5d5d5d95]"
    >
      <p className="text-3xl text-[#5d5d5d] font-medium ">{title}</p>
      <div></div>
    </a>
  );
}

export default NavigationLinks;
