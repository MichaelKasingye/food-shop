import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" light expand="md sm lg" sticky="top" className="px-5">
      <NavbarBrand href="/">
        <h1 className={navStyles.title}>foodiy</h1>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} style={{ backgroundColor: "#fff" }} />
      <Collapse isOpen={isOpen} navbar >
        <Nav className="mr-auto" navbar>
          <NavItem >
            <NavLink href="/#products" className="text-white">Foods</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/#contact" className="text-white">Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about"className="text-white">About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navi;
