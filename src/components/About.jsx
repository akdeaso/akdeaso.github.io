import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12">
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          doloribus minus quam illo nesciunt animi odit iure deleniti dolore
          unde laborum iusto, beatae quis dolor inventore optio. Quia, quaerat
          ex!
        </p>
        <a
          href="mailto:akdeaso@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          akdeaso@gmail.com
        </a>
      </div>
      <div>
        <img
          src={`https://avatars.githubusercontent.com/u/52682218?v=4`}
          alt="Akdeas Oktanae"
          className="w-full  rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
