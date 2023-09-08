import SectionTitle from "./SectionTitle";
import { HiMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-20 justify-between">
      <div>
        <SectionTitle>About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          To contact me, please find my contact below
        </p>
        <div className="w-full md:w-6/12 flex items-center">
          <div className="mr-3">
            <HiMail className="w-6 h-6 text-gray-800 dark:text-gray-300" />
          </div>
          <a
            href="mailto:akdeaso@gmail.com"
            className="text-md md:text-lg text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            Email
          </a>
        </div>
        <div className="w-full md:w-6/12 flex items-center">
          <div className="mr-3">
            <FaWhatsapp className="w-6 h-6 text-gray-800 dark:text-gray-300" />
          </div>
          <a
            href="https://wa.me/6282230701429"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md md:text-lg text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500"
          >
            Whatsapp
          </a>
        </div>
      </div>
      <div>
        <img
          src={`https://avatars.githubusercontent.com/u/52682218?v=4`}
          alt="Akdeas Oktanae"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default About;
