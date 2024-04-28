import React from "react";

import Image from "next/image";
import textLogo from "../assets/text-logo.png";
import Link from "next/link";

const HomeLogo = () => {
  return (
    <div className={`max-w-[230px] absolute top-4 left-4 `}>
      <Link href="/">
        <Image src={textLogo} alt="caracol studio logo" />
      </Link>
    </div>
  );
};

export default HomeLogo;
