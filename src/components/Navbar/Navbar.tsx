import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const MyNav = () => {
  return (
    <Navbar>
      <Container>
        <Link to={"/"}>
          <Navbar.Brand>
            <img
              className="nav-image"
              src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Emblema.jpg"
              alt="home"
            />
          </Navbar.Brand>
        </Link>
        <div className="d-flex">
          <Link className="pe-4" to="/characters">Characters</Link>
          <Link to="/episodes">Episodes</Link>
        </div>
      </Container>
    </Navbar>
  );
};
