import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class CustomerLeftNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }


  render() {
    return (
      <div className="leftNav container-fluid">
        <Navbar light expand="md" className="me" >
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/Customer/Profile">
                  Profile
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Customer/Bookings">Your Bookings
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Customer/services">Services
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
