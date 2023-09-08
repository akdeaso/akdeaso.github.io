import { FaReact, FaDatabase } from "react-icons/fa";
import {
  SiNodedotjs,
  SiMongodb,
  SiWordpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const skills = [
  {
    skill: "React JS",
    icon: <FaReact className="w-full h-full" />,
  },
  {
    skill: "Node JS & Express JS",
    icon: <SiNodedotjs className="w-full h-full" />,
  },
  {
    skill: "MongoDB",
    icon: <SiMongodb className="w-full h-full" />,
  },
  {
    skill: "Rest API",
    icon: <FaDatabase className="w-full h-full" />,
  },
  {
    skill: "Wordpress",
    icon: <SiWordpress className="w-full h-full" />,
  },
  {
    skill: "JavaScript",
    icon: <SiJavascript className="w-full h-full" />,
  },
  {
    skill: "HTML",
    icon: <SiHtml5 className="w-full h-full" />,
  },
  {
    skill: "CSS",
    icon: <SiCss3 className="w-full h-full" />,
  },
  {
    skill: "Git",
    icon: <SiGit className="w-full h-full" />,
  },
];

export default skills;
