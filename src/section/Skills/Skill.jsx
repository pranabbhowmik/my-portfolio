import React from "react";
import htmlImage from "../../assets/html.png";
import cssImage from "../../assets/social_11516361.png";
import CImage from "../../assets/letter-c (1).png";
import reactImage from "../../assets/React.png";
import jsImage from "../../assets/javascript.png";
import python from "../../assets/python.png";
import node from "../../assets/nodejs.png";
import express from "../../assets/express-removebg-preview.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import tailwind from "../../assets/tailwindcss.png";
import aws from "../../assets/aws.png";
import Redux from "../../assets/redux..png";
import Restfulapi from "../../assets/restfullapi.png";
import zod from "../../assets/logo.png";
import jwt from "../../assets/pic_logo.png";
// Similarly, add paths for other images.

const Skill = ({ mode }) => {
  const skills = [
    { name: "C", image: CImage },
    { name: "JavaScript", image: jsImage },
    { name: "Python", image: python },
    { name: "React", image: reactImage },
    { name: "Express", image: express },
    { name: "Node.js", image: node },
    { name: "Redux", image: Redux },
    { name: "Restful API", image: Restfulapi },
    { name: "MongoDB", image: mongodb },
    { name: "MySQL", image: mysql },
    { name: "Zod", image: zod },
    { name: "JWT", image: jwt },
    { name: "Tailwind Css", image: tailwind },
    { name: "AWS", image: aws },
    { name: "HTML", image: htmlImage },
    { name: "CSS", image: cssImage },
  ];

  return (
    <section
      id="skills"
      className={`flex flex-col gap-8 items-center md:justify-evenly min-h-screen scroll-smooth md:px-8 -m-1 md:-mt-20 ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-5xl font-rubik mb-8 text-center">Skills</h1>

      {/* Adjusting the grid for responsive layout */}
      <div className="grid grid-cols-3 gap-10 md:gap-20 sm:grid-cols-3 lg:grid-cols-5 md:-mt-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain"
            />
            <span className="absolute bottom-0 mb-[-30px] opacity-0 group-hover:opacity-100 group-hover:mb-[70px] transition-all duration-300 text-center font-robotoMono">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
