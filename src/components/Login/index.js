import React, { Component, useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const setLoggedIn = (payload) => {
  return {
    type: "SET_LOGGEDIN",
    payload,
  };
};

const Login = () => {
  let history = useHistory();
  console.log(history, 2222);
  const [currentView, setCurrentView] = useState("signUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const changeView = (view) => {
    setCurrentView(view);
  };

  useEffect(() => {
    // login();
    // getResume();
  }, []);

  const login = async (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(username, password);
    if (!username || !password) return;
    try {
      let { data } = await axios.post("/login", {
        username,
        password,
      });
      dispatch(setLoggedIn(true));
      history.push(`/${data.user.username}`);
      console.log("res", data);
    } catch (error) {
      console.log("err13", error);
    }
  };

  const signUpSubmit = async (e) => {
    e.preventDefault();
    console.log(username);
    try {
      let response = await axios.post("/signup", {
        email,
        password,
        username,
      });
      console.log("res", response);
    } catch (error) {
      console.log("err13", error);
    }
  };

  const updateResume = async () => {
    try {
      let response = await axios.post("/resume", {
        name: "shubham",
        designation: "shubham",
        about: "shubham",
        education: [
          {
            from: "Sun Jun 28 2020 17:11:40 GMT+0530 (India Standard Time)",
            to: "Sun Jun 28 2020 17:11:40 GMT+0530 (India Standard Time)",
            title: "shubham",
            description: "shubham",
          },
          {
            from: "Sun Jun 28 2020 17:11:40 GMT+0530 (India Standard Time)",
            to: "Sun Jun 28 2020 17:11:40 GMT+0530 (India Standard Time)",
            title: "shubham",
            description: "shubham",
          },
        ],
        skill: {
          frontend: [
            { name: "html", progress: "90" },
            { name: "js", progress: "70" },
          ],
          backend: [{ name: "express", progress: "50" }],
          miscellaneous: [{ name: "webpack", progress: "30" }],
        },
        project: {
          official: [
            {
              title: "sistic",
              oneLiner: "tocketing",
              description: "askfbjowrgnjlegn asgt",
              tags: ["sd", "js"],
            },
          ],
          side: [
            {
              title: "sistic dsgbdg",
              oneLiner: "freg",
              description: " asgt",
              tags: ["express", "js"],
            },
          ],
        },
      });
      console.log("res", response);
    } catch (error) {
      console.log("err13", error);
    }
  };
  const Logout = async () => {
    try {
      let response = await axios.post("/logout");
      dispatch(setLoggedIn(false));
      console.log("res", response);
    } catch (error) {
      console.log("err13", error);
    }
  };
  const currentViewHandler = () => {
    switch (currentView) {
      case "signUp":
        return (
          <form onSubmit={signUpSubmit}>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    onChange={({ target: { value } }) => setUsername(value)}
                    value={username}
                    required
                  />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    required
                    onChange={({ target: { value } }) => setEmail(value)}
                    value={email}
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    required
                    onChange={({ target: { value } }) => setPassword(value)}
                    value={password}
                  />
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => changeView("logIn")}>
              Have an Account?
            </button>
          </form>
        );
        break;
      case "logIn":
        return (
          <form onSubmit={login}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input
                    value={username}
                    type="text"
                    id="username"
                    required
                    onChange={({ target: { value } }) => setUsername(value)}
                  />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input
                    value={password}
                    type="password"
                    id="password"
                    required
                    onChange={({ target: { value } }) => setPassword(value)}
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button type="submit">Login</button>
            <button type="button" onClick={() => changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
        break;
      // case "PWReset":
      //   return (
      //     <form>
      //       <h2>Reset Password</h2>
      //       <fieldset>
      //         <legend>Password Reset</legend>
      //         <ul>
      //           <li>
      //             <em>A reset link will be sent to your inbox!</em>
      //           </li>
      //           <li>
      //             <label htmlFor="email">Email:</label>
      //             <input type="email" id="email" required />
      //           </li>
      //         </ul>
      //       </fieldset>
      //       <button>Send Reset Link</button>
      //       <button type="button" onClick={() => changeView("logIn")}>
      //         Go Back
      //       </button>
      //     </form>
      //   );
      default:
        break;
    }
  };

  const getResume = async () => {
    try {
      let response = await axios.get("/resume/shubham1");
      console.log("res222", response);
    } catch (error) {
      console.log("err13", error);
    }
  };
  return (
    <section id="entry-page">
      {currentViewHandler()}
      <button onClick={Logout}>Logout</button>
      <button onClick={updateResume}>update resume</button>
    </section>
  );
};
export default Login;
