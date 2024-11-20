import React from "react";
import Projectcard from "../../Card/Projectcard";
import goppo from "../../assets/goppo.png";
import totowala from "../../assets/totowala.jpg";
import Saregamapa from "../../assets/saregamapa.png";
import note from "../../assets/note.jpg";

const Project = ({ mode }) => {
  return (
    <section
      id="projects"
      className={`flex flex-col gap-8 scroll-smooth items-center md:flex-row md:flex-wrap min-h-[1580px] md:min-h-lvh md:justify-evenly md:px-8 
      -m-1 md:-mt-32 ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-5xl font-rubik mb-8">PROJECTS</h1>
      <div className="flex flex-col gap-28 md:gap-16 items-center md:flex-row md:flex-wrap md:justify-evenly md:px-8 md:-mt-48 mt-3">
        <Projectcard
          src={goppo}
          link="https://goppo.onrender.com/signup"
          h3="Goppo"
          p="Chat App"
        />
        <Projectcard
          src={totowala}
          link="https://toto-wala.vercel.app/"
          h3="Totowala"
          p="E-rickshaw booking"
        />
        <Projectcard
          src={Saregamapa}
          link="https://saregamapadha.netlify.app/"
          h3="Sa Re Ga Ma Pa"
          p="Music App"
        />
        <Projectcard
          src={note}
          link="https://notebanao.netlify.app/"
          h3="Note Banao"
          p="Note App"
        />
      </div>
    </section>
  );
};

export default Project;
