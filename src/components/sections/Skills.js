import React from "react";
import Resume from "../../resume.json";
import Skill from "../elements/Skill"


function buildSkillsRow(skills, start, end) {
  const batch = skills.slice(start, end);
  let skillsComponents = [];
  batch.forEach((value, index) => {
    skillsComponents.push(
      <div key={index} className="column is-3">
        <Skill
          text={value.name}
          icon={value.x_icon}
          description={value.x_description}
        />
      </div>
    )
  });
  return skillsComponents;
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h1 className="title">Skills</h1>
        <div className="columns">
          {buildSkillsRow(Resume.skills, 0, 3)}
        </div>
      </div>
    </section>
  );
}

export default Skills;
