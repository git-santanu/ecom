import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  const data = localStorage.getItem("Signup info");
  console.log("data>>>>>", data);
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecom</Navbar.Brand>
          <Nav className="me-auto nav_wrapper">
            {data ? (
              <>
                <Link to="/add">Add</Link>
                <Link to="/edit">Edit</Link>
                <Link to>{JSON.parse(data).name}</Link>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/Register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
