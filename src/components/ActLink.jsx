import React from "react";

function ActLink({ link, title }) {
  return (
    <a href={link} className="font-bold text-white">
      {title}
    </a>
  );
}

export default ActLink;
