import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import User from "./components/User";
import Task from "./components/Task";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Login from "./components/Login";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/task">
          <Task />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        {/*
          <Route path="/login">
        <Login />
      </Route>
        */}
      </Router>
    </div>
  );
}

export default App;
