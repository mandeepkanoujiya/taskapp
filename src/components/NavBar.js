import React from "react";

import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar className="nav">
        <Navbar.Brand href="">LOGO</Navbar.Brand> <br />
        <Nav className="nav2 mr-auto">
          <Nav.Link href="#home">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#task">
            <Link to="/task">Tasks</Link>
          </Nav.Link>
          <Nav.Link href="#user">
            <Link to="/user">User</Link>
          </Nav.Link>
          {/*
            <Nav.Link href="#registration">
            <Link to="/login">login</Link>
          </Nav.Link>
          */}
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
