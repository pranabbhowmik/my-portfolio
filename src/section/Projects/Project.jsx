import React from "react";
import Projectcard from "../../Card/Projectcard";
import movie from "../../assets/viberr.png";
import totowala from "../../assets/totowala.jpg";
import fakestore from "../../assets/Fake.jpg";
import pokemon from "../../assets/pokemon.jpg";

const Project = ({ mode }) => {
  return (
    <section
      id="projects"
      className={`flex flex-col gap-8 scroll-smooth items-center md:flex-row md:flex-wrap min-h-[1580px] md:min-h-lvh md:justify-evenly md:px-8 
      -m-1 md:-mt-32 ${mode === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <h1 className="text-5xl font-rubik mb-8">PROJECTS</h1>
      <div className="flex flex-col gap-28 md:gap-16 items-center md:flex-row md:flex-wrap md:justify-evenly md:px-8 md:-mt-48 mt-3">
        <Projectcard
          src={movie}
          link="https://moviehub-tukai.netlify.app/"
          h3="Movie-Hub"
          p="Movie App"
        />
        <Projectcard
          src={totowala}
          link="https://toto-wala.vercel.app/"
          h3="Totowala"
          p="E-rickshaw booking"
        />
        <Projectcard
          src={fakestore}
          link="https://spotify-tukai.netlify.app/"
          h3="Fake Store"
          p="E-commerce"
        />
        <Projectcard
          src={pokemon}
          link="https://pokemon-tukai18.netlify.app/"
          h3="Pokemon"
          p="Pokemons"
        />
      </div>
    </section>
  );
};

export default Project;
