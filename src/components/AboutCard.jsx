import React from "react";

const AboutCard = ({ title, desc }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default AboutCard;
