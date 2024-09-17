import React from "react";

function Projectcard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className=" max-w-xs rounded-2xl bg-white shadow-md hover:shadow-lg  hover:duration-300 ease-in-out transform hover:scale-110 text-center w-[250px] h-[240px]"
    >
      <img
        className="w-full h-60 object-cover rounded-2xl"
        src={src}
        alt={`${h3} logo`}
      />
      <div className="p-4">
        <h3 className="text-xl font-rubik mb-2">{h3}</h3>
        <p className="font-robotoMono">{p}</p>
      </div>
    </a>
  );
}

export default Projectcard;
