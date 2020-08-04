import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar as Nav } from "react-bootstrap";
import { logout } from "../services/auth";
import { Alfonso, useAlfonso } from "../context/Alfonsocontext";

const handleLogout = (props) => {
  logout().then(() => {
    props.setUser(null);
  });
};

export default function Navbar(props) {
  const { count } = useAlfonso();
  return (
    <Nav className="nav justify-content-end" bg="primary">
      <h1>{count}</h1>
      {props.user && <Nav.Brand>Welcome {props.user.username} </Nav.Brand>}
      <Nav.Brand>
        <Link to="/">Home</Link>
      </Nav.Brand>
      {props.user ? (
        <>
          <Nav.Brand>
            <Link to="/projects">Projects</Link>
          </Nav.Brand>
          <Nav.Brand>
            <Link to="/" onClick={() => handleLogout(props)}>
              Logout
            </Link>
          </Nav.Brand>
        </>
      ) : (
        <Nav.Brand>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </Nav.Brand>
      )}
    </Nav>
  );
}
