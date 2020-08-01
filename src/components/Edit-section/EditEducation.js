import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResizableTextarea from "../../common/ResizableTextarea";
import Select from "../../common/Select";

let date = new Date();
let currentyear = date.getFullYear();
let years = [];
for (let i = 2006; i <= currentyear; i++) {
  years.push(i);
}

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const EditEducation = () => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  return (
    <div className="education-block">
      {education.map((edu, index) => (
        <div key={index} className="education-block__tab">
          <div
            className="education-block__date"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "220px",
              alignItems: "unset",
              flex: "inherit",
              marginRight: 0,
              marginTop: "25px",
            }}
          >
            <img
              className="button-download"
              src={require("../../images/svg/calendar.svg")}
              alt="download button"
              style={{ alignSelf: "center" }}
            />
            <div className="from">
              <label>From</label>{" "}
              <Select
                handleChange={({ target }) => {
                  dispatch({
                    type: "UPDATE_EDUCATION",
                    payload: {
                      title: target.value,
                      index: index,
                      field: "fromMonth",
                    },
                  });
                }}
                options={months}
                value={edu.fromMonth}
              />
              <Select
                handleChange={({ target }) =>
                  dispatch({
                    type: "UPDATE_EDUCATION",
                    payload: {
                      title: target.value,
                      index: index,
                      field: "fromYear",
                    },
                  })
                }
                options={years}
                value={edu.fromYear}
              />
            </div>
            <div className="to">
              <label>To</label>{" "}
              <Select
                handleChange={({ target }) => {
                  dispatch({
                    type: "UPDATE_EDUCATION",
                    payload: {
                      title: target.value,
                      index: index,
                      field: "toMonth",
                    },
                  });
                }}
                options={months}
                value={edu.toMonth}
              />
              <Select
                handleChange={({ target }) =>
                  dispatch({
                    type: "UPDATE_EDUCATION",
                    payload: {
                      title: target.value,
                      index: index,
                      field: "toYear",
                    },
                  })
                }
                options={years}
                value={edu.toYear}
              />
            </div>
          </div>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
            }}
            onClick={() =>
              dispatch({
                type: "DELETE_EDUCATION",
                payload: {
                  index,
                },
              })
            }
          >
            <img
              src={require("../../images/svg/icon.svg")}
              alt="Delete Education"
            />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              Delete Education
            </span>
          </div>
          <div className="education-block__info" style={{ marginLeft: "25px" }}>
            <input
              className="name"
              style={{ width: "100%", boxShadow: "none", padding: 0 }}
              value={edu.title}
              onChange={({ target }) =>
                dispatch({
                  type: "UPDATE_EDUCATION",
                  payload: {
                    title: target.value,
                    index,
                    field: "title",
                  },
                })
              }
            />

            <ResizableTextarea
              value={edu.description}
              setValue={(value) =>
                dispatch({
                  type: "UPDATE_EDUCATION",
                  payload: {
                    title: value,
                    index: index,
                    field: "description",
                  },
                })
              }
              className="about-text resize-about"
            />
          </div>
        </div>
      ))}
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => dispatch({ type: "ADD_EDUCATION" })}
      >
        <img
          src={require("../../images/svg/plus-icn.svg")}
          alt="Add new Education"
        />
        <span
          style={{
            marginLeft: "15px",
            verticalAlign: "super",
          }}
        >
          Add new Education
        </span>
      </div>
    </div>
  );
};

export default EditEducation;
