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
          <NavbarToggler style={{backgroundColor:"white"}} onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar >
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/Customer/Profile">
                  <span className="navcol">
                  <i class="fa fa-user" aria-hidden="true"></i> Profile
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Customer/Bookings">
                <span className="navcol">
                <i class="far fa-file-alt"></i> Your Bookings
                  </span>
                </Link>
              </NavItem>

              <NavItem>
                <Link className="nav-link" to="/Customer/AvailServices">
                <span className="navcol">
                <i class="fab fa-resolving"></i> AvailServices
                  </span>
                </Link>
              </NavItem>
              
              <NavItem>
                <Link className="nav-link" to="/Customer/services">
                <span className="navcol">
                <i class="fab fa-servicestack"></i> Services
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/Customer/UpdateProfile">
                <span className="navcol">
                <i class="fas fa-edit"></i> UpdateProfile
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
