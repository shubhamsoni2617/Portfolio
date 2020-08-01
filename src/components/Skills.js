import React from "react";
import { useSelector } from "react-redux";

const Skills = () => {
  const skill = useSelector((state) => state.skill);

  return (
    <div className="skill-block">
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../images/svg/html-five.svg")}
            alt="download button"
          />
          Front End
        </h4>
        <ul className="skill-list">
          {skill.frontend.map((frontendSkill) => (
            <li className="skill-item">{frontendSkill}</li>
          ))}
        </ul>
      </div>
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../images/svg/archive.svg")}
            alt="download button"
          />
          Back End
        </h4>
        <ul className="skill-list">
          {skill.backend.map((backendSkill) => (
            <li className="skill-item">{backendSkill}</li>
          ))}
        </ul>
      </div>
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../images/svg/git.svg")}
            alt="download button"
          />
          Miscellaneous
        </h4>
        <ul className="skill-list">
          {skill.miscellaneous.map((miscellaneousSkill) => (
            <li className="skill-item">{miscellaneousSkill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
