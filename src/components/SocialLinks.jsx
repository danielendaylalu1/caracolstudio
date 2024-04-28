import React from "react";
import Link from "next/link";

const SocialLinks = ({ children, link }) => {
  return (
    <div className="border-t border-white flex justify-center py-4">
      <Link href={link}>{children}</Link>
    </div>
  );
};

export default SocialLinks;
