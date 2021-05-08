import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ServiceProviderLeftNav extends Component {

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
        <Navbar light expand="sm" className="me" >
          <NavbarToggler style={{backgroundColor:"white"}} onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/ServiceProvider/Profile">
                  <span className="navcol">
                  <i class="fa fa-user" aria-hidden="true"></i> Profile
                  </span>
              </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/ServiceProvider/BookingsCompleted">
                <span className="navcol">
                <i class="far fa-check-square" aria-hidden="true"></i> Bookings Completed
                  </span>
              </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/ServiceProvider/Bookings">
                <span className="navcol">
                <i class="far fa-file-alt"></i> Bookings
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/ServiceProvider/UpdateProfile">
                <span className="navcol">
                <i class="fas fa-edit    "></i> Update Profile
                  </span>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

    )
  }
}
