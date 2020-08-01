import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResizableTextarea from "../../common/ResizableTextarea";
const EditAbout = () => {
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();
  //   const [value, setValue] = useState(about);

  return (
    <div className="about">
      <img
        className="profile-image"
        src={require("../../images/shubh.jpg")}
        alt="Tejas-Bhosale"
      />
      <div className="about__text">
        <ResizableTextarea
          value={about}
          setValue={(value) =>
            dispatch({ type: "UPDATE_RESUME", payload: { about: value } })
          }
          className="about-text resize-about"
        />
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

export default EditAbout;
