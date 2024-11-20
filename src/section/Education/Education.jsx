import React from "react";

const Education = ({ mode }) => {
  return (
    <section
      id="education"
      className={`flex flex-col gap-8 items-center md:justify-evenly min-h-lvh md:px-8 scroll-smooth md:-mt-20 -mt-10 ${
        mode === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <h1 className="text-5xl font-rubik mb-8 mt-16 sm:mt-1 text-center">
        Education
      </h1>

      <ol className="relative border-l border-gray-600 dark:border-gray-400  max-w-xl md:-mt-40 mx-5">
        <li className="mb-10 ml-6">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-100"></div>
          <time className="mb-1 text-sm font-robotoMono leading-none ">
            Bengal Institute of Technology and Management 2021 - 2025
          </time>
          <h3 className="text-lg font-semibold">Btech in CSE</h3>
          <p className="mb-4 text-base font-normal">
            During my college years, I developed strong technical skills, built
            lifelong friendships, and countless learning opportunities that
            shaped my future path.
          </p>
        </li>
        <li className="mb-10 ml-6">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-100"></div>
          <time className="mb-1 text-sm font-robotoMono leading-none">
            Simulia C.K Vidyapith (H.S) 2013 - 2021
          </time>
          <br></br>
          <br></br>
          <p className="text-base font-normal ">
            During my school days, I loved playing cricket with friends, while
            singing was a cherished hobby. Both activities helped me relax and
            stay focused, creating many memorable moments.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Education;
