import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";
import skills from "../data/skills";

const Skills = () => {
  return (
    <div>
      <SectionTitle>Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillItem key={skill.skill} skill={skill.skill} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
