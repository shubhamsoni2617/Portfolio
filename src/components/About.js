import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const about = useSelector((state) => state.about);

  return (
    <div className="about">
      <img
        className="profile-image"
        src={require("../images/shubh.jpg")}
        alt="Tejas-Bhosale"
      />
      <div className="about__text">
        <p className="about-text resize-about">
          <span className="highlight">{about.split(" ")[0]} </span>
          {about.split(" ").splice(1).join(" ")}
        </p>

        {/* <a className="button" href={require("../resume/resume.pdf")} download>
          <img
            className="button-download"
            src={require("../images/svg/install.svg")}
            alt="download button"
          />
          DOWNLOAD CV{" "}
        </a> */}
      </div>
    </div>
  );
};

export default About;
