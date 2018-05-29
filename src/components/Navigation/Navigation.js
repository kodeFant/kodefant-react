import React, { Component } from "react";
import kodeFanten from "../../img/kodeFanten.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-light bg-lys" light expand="md" fixed="top">
          <div className="container">
            <NavbarBrand href="/">
              {"{kodeFant}"}
              <img src={kodeFanten} className="navLogo" alt="kodeFant logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="" navbar>
                <NavItem>
                  <NavLink href="/">Hjem</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#om">Om</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#prosjekter">Prosjekter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#kontakt">Kontakt</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
