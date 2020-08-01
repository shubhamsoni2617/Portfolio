import React, { useState, useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import Selector from "./Selector";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditAbout from "./Edit-section/EditABout";
import EditHeader from "./Edit-section/EditHeader";
import EditEducation from "./Edit-section/EditEducation";
import EditSkills from "./Edit-section/EditSkills";

const setViewMode = (payload) => {
  return {
    type: "SET_VIEW_MODE",
    payload,
  };
};

const setLoggedIn = (payload) => {
  return {
    type: "SET_LOGGEDIN",
    payload,
  };
};

const Home = () => {
  let { username } = useParams();
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.allData);

  const viewMode = useSelector((state) => state.viewMode);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [selectedSection, setSelectedSection] = useState("About");

  const fetchData = async () => {
    try {
      // let { data } = await axios.get(`/resume/${username}`);
      // dispatch({
      //   type: "UPDATE_RESUME",
      //   payload: { ...data.data, allData: data.data },
      // });
      // dispatch(setLoggedIn(data.isOwner));
    } catch (error) {
      console.log("err13", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onSelect = (section) => {
    setSelectedSection(section);
  };
  function showSection() {
    console.log("StateChanged");
    switch (selectedSection) {
      case "About":
        return <About />;
      case "Education":
        return <Education />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <h3>Something went wrong</h3>;
    }
  }

  function showEditSection() {
    console.log("StateChanged");
    switch (selectedSection) {
      case "About":
        return <EditAbout />;
      case "Education":
        return <EditEducation />;
      case "Skills":
        return <EditSkills />;
      case "Projects":
        return <Projects />;
      case "Blog":
        return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <h3>Something went wrong</h3>;
    }
  }
  return (
    <div className="content">
      {isLoggedIn && (
        <div
          className="view-edit"
          style={{ display: "flex", justifyContent: "center" }}
        ></div>
      )}
      {viewMode ? <Header /> : <EditHeader />}
      {!viewMode ? (
        <button
          className="button"
          style={{ display: "block" }}
          onClick={() => dispatch(setViewMode(true))}
        >
          View Mode
        </button>
      ) : (
        <button
          className="button"
          style={{ display: "block" }}
          onClick={() => dispatch(setViewMode(false))}
        >
          Edit Mode
        </button>
      )}
      <div className="content-inside">
        <Selector onSelect={onSelect} selectedSection={selectedSection} />
        {viewMode ? showSection() : showEditSection()}
      </div>
      <div>
        {isLoggedIn && (
          <div
            className="edit-save"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button
              className="button"
              style={{ display: "block", marginRight: "10px" }}
              onClick={() => {
                // dispatch(setViewMode(true));
                dispatch({
                  type: "UPDATE_RESUME",
                  payload: allData,
                });
              }}
            >
              cancel
            </button>
            <button
              style={{ display: "block" }}
              className="button"
              onClick={() => dispatch(setViewMode(false))}
            >
              save changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
