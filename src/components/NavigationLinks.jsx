import React from "react";

function NavigationLinks({ link, title }) {
  return (
    <a
      href={link}
      className="nav-link w-full h-[20%] flex items-center justify-between px-16 border-b border-white"
    >
      <p className="text-3xl text-[#5d5d5d] font-medium ">{title}</p>
      <div></div>
    </a>
  );
}

export default NavigationLinks;
