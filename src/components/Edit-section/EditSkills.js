import React from "react";
import { useSelector, useDispatch } from "react-redux";

const EditSkills = () => {
  const skill = useSelector((state) => state.skill);
  const dispatch = useDispatch();

  return (
    <div className="skill-block">
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../../images/svg/html-five.svg")}
            alt="download button"
          />
          Front End
        </h4>
        <ul className="skill-list">
          {skill.frontend.map((frontendSkill, index) => (
            <li className="skill-edit-item">
              <input
                className="name"
                style={{
                  width: "100%",
                  boxShadow: "none",
                  padding: 0,
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
                value={frontendSkill}
                onChange={({ target }) =>
                  dispatch({
                    type: "UPDATE_SKILLS",
                    payload: {
                      value: target.value,
                      index,
                      field: "frontend",
                    },
                  })
                }
              />
              <div
                style={{
                  cursor: "pointer",
                  marginTop: "5px",
                  textAlign: "center",
                }}
                onClick={() =>
                  dispatch({
                    type: "DELETE_SKILL",
                    payload: {
                      index,
                      field: "frontend",
                    },
                  })
                }
              >
                <img src={require("../../images/svg/icon.svg")} alt="Delete" />
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Delete
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: "ADD_SKILLS", payload: "frontend" })}
        >
          <img src={require("../../images/svg/plus-icn.svg")} alt="Add New" />
          <span
            style={{
              marginLeft: "15px",
              verticalAlign: "super",
            }}
          >
            Add New
          </span>
        </div>
      </div>
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../../images/svg/archive.svg")}
            alt="download button"
          />
          Back End
        </h4>
        <ul className="skill-list">
          {skill.backend.map((backendSkill, index) => (
            <li className="skill-edit-item">
              <input
                className="name"
                style={{
                  width: "100%",
                  boxShadow: "none",
                  padding: 0,
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
                value={backendSkill}
                onChange={({ target }) =>
                  dispatch({
                    type: "UPDATE_SKILLS",
                    payload: {
                      value: target.value,
                      index,
                      field: "backend",
                    },
                  })
                }
              />
              <div
                style={{
                  cursor: "pointer",
                  marginTop: "5px",
                  textAlign: "center",
                }}
                onClick={() =>
                  dispatch({
                    type: "DELETE_SKILL",
                    payload: {
                      index,
                      field: "backend",
                    },
                  })
                }
              >
                <img src={require("../../images/svg/icon.svg")} alt="Delete" />
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Delete
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: "ADD_SKILLS", payload: "backend" })}
        >
          <img src={require("../../images/svg/plus-icn.svg")} alt="Add New" />
          <span
            style={{
              marginLeft: "15px",
              verticalAlign: "super",
            }}
          >
            Add New
          </span>
        </div>
      </div>
      <div className="skill-block__tab">
        <h4 className="skill-block__heading">
          <img
            className="button-download"
            src={require("../../images/svg/git.svg")}
            alt="download button"
          />
          Miscellaneous
        </h4>
        <ul className="skill-list">
          {skill.miscellaneous.map((miscellaneousSkill, index) => (
            <li className="skill-edit-item">
              <input
                className="name"
                style={{
                  width: "100%",
                  boxShadow: "none",
                  padding: 0,
                  fontSize: "16px",
                  borderRadius: "4px",
                }}
                value={miscellaneousSkill}
                onChange={({ target }) =>
                  dispatch({
                    type: "UPDATE_SKILLS",
                    payload: {
                      value: target.value,
                      index,
                      field: "miscellaneous",
                    },
                  })
                }
              />
              <div
                style={{
                  cursor: "pointer",
                  marginTop: "5px",
                  textAlign: "center",
                }}
                onClick={() =>
                  dispatch({
                    type: "DELETE_SKILL",
                    payload: {
                      index,
                      field: "miscellaneous",
                    },
                  })
                }
              >
                <img src={require("../../images/svg/icon.svg")} alt="Delete" />
                <span
                  style={{
                    marginLeft: "10px",
                  }}
                >
                  Delete
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() =>
            dispatch({ type: "ADD_SKILLS", payload: "miscellaneous" })
          }
        >
          <img src={require("../../images/svg/plus-icn.svg")} alt="Add New" />
          <span
            style={{
              marginLeft: "15px",
              verticalAlign: "super",
            }}
          >
            Add New
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditSkills;
