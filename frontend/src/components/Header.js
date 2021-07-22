import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import logo3 from "../images/logo3.png"

const Header = () => {
  return (
    <Navbar style={{ background: "#0d0d0d" }} expand='lg' variant='dark'>
      <Navbar.Brand href='#home' className='logo'>
        {" "}
        <img
          alt=''
          src={logo3}
          width={
            window.innerWidth > 1100
              ? "250"
              : window.innerWidth > 760
              ? "150"
              : "160"
          }
          className='d-inline-block align-top'
          style={{ marginLeft: "6vw" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto nav'>
          <Nav.Link href='#contact' class='lin' style={{ color: "#555eff" }}>
            Section 1
          </Nav.Link>
          <Nav.Link href='#contact' class='lin' style={{ color: "#555eff" }}>
            Section 2
          </Nav.Link>
          <Nav.Link href='#contact' class='lin' style={{ color: "#555eff" }}>
            Section 3
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
