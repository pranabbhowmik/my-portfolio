import './App.css'
import React, { useState } from 'react'
import Hero from './section/Hero/Hero'
import Project from './section/Projects/Project'
import Skill from './section/Skills/Skill';
import Education from './section/Education/Education';
import Contact from './section/Contact/Contact';
import Footer from './section/Footer/Footer';

const App = () => {
  // Move the mode state and handelmode function to the parent component
  const [mode, setMode] = useState("light");

  const handelmode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}>
      {/* Pass mode and handleMode as props to both Hero and Project */}
      <Hero mode={mode} handelmode={handelmode} />
      <Project mode={mode} />
      <Skill mode={mode}/>
      <Education mode={mode}/>
      <Contact mode={mode}/>
      <Footer  mode={mode}/>
    </div>
  );
};
export default App
