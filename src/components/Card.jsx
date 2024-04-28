import React from "react";

const Card = ({ title, date, desc, showAuthor }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg font-normal">{date}</p>
      </div>
      <p className="text-sm">{desc}</p>
      {showAuthor && <p className="font-bold self-end">scopri di più</p>}
    </div>
  );
};

export default Card;
