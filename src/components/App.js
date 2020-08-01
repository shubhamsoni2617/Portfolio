import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login/index";
import { useDispatch } from "react-redux";
import axios from "axios";

const App = () => {
  // const dispatch = useDispatch();
  // let { username } = useParams();
  // console.log("username", username);
  // const login = async () => {
  //   try {
  //     let { data } = await axios.post("/login");
  //     dispatch(setLoggedIn(true));
  //     console.log("res", data);
  //   } catch (error) {
  //     console.log("err13", error);
  //   }
  // };
  // useEffect(() => {
  //   login();
  // }, []);
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Switch>
        <Route exact path="/login" exact component={Login} />
        <Route exact path="/:username" exact component={Home} />
        <Route exact path="/" exact component={() => <p>11111</p>} />
      </Switch>
    </Router>
  );
};

export default App;
