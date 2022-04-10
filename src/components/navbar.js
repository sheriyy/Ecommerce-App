import * as React from "react";
import Container from "@mui/material/Container";
import {
  Offcanvas,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { request } from "./request";
const logoutUrl = "http://localhost:3005/logout";

const Header = () => {
  const employeeData = useSelector((state) => state);
  console.log("navbar", employeeData);

  const handleClick = async () => {
    let res = await request({
      url: logoutUrl,
      method: "post",
    });
    console.log("logout", res);
  };
  return (
    <Navbar bg="dark" expand={false}>
      <Container fluid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "whitesmoke",
            padding: "0.7% 0 0 0",
          }}
        >
          <Navbar.Brand>{/* Header */}</Navbar.Brand>
          <h5>Employee Record</h5>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{ backgroundColor: "whitesmoke" }}
          />
        </div>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ width: "24%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          {employeeData.allEmployees.name !== "" ? (
            <Nav.Link href="#" style={{ borderBottom: "1px solid lightgrey" }}>
              <AccountCircleIcon style={{ marginRight: "0.4rem" }} />
              {employeeData.allEmployees.name.toUpperCase()}
            </Nav.Link>
          ) : (
            ""
          )}
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/register">
                <HowToRegIcon style={{ marginRight: "0.4rem" }} />
                Register
              </Nav.Link>
              <Nav.Link href="/employee">
                <GroupIcon style={{ marginRight: "0.4rem" }} />
                Employee
              </Nav.Link>
              <Nav.Link href="/" onClick={handleClick}>
                Logout
                <LogoutIcon style={{ marginLeft: "0.4rem" }} />
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
