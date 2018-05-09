import React, { Component } from 'react';
import kodeFanten from '../img/kodeFanten.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
          <NavbarBrand href="/">{'{kodeFant}'}
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

const Navi = () => {
  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-lys">
      <div className="container">
        <a className="navbar-brand" href="/">{'{kodeFant}'}
          
      </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Hjem
              <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#om">Om</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#prosjekter">Prosjekter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
    </div>
  </nav>
  )
}

export default Navigation;