import React from "react";
import Link from "next/link";

const SocialLinks = ({ children, link }) => {
  return (
    <div className="border-t border-white flex">
      <Link href={link} className="py-4 w-full text-center flex justify-center">
        {children}
      </Link>
    </div>
  );
};

export default SocialLinks;
