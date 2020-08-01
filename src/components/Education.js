import React from "react";
import { useSelector } from "react-redux";

const Education = () => {
  const education = useSelector((state) => state.education);

  return (
    <div className="education-block">
      {education.map((edu) => (
        <div className="education-block__tab">
          <h3 className="education-block__date">
            <img
              className="button-download"
              src={require("../images/svg/calendar.svg")}
              alt="download button"
            />
            {edu.from} - {edu.to}
          </h3>
          <div className="education-block__info">
            <h4 className="education-block__heading">{edu.title}</h4>
            <p className="education-block__paragraph">
              <q>{edu.description}</q>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
