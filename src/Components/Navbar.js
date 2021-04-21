import React,{Component} from 'react';
import { Navbar, NavbarToggler, Collapse,NavbarBrand,Nav,NavItem,NavLink,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class Navbar1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen:false,
            username: '',
            password: '',
        }
        
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
      }
      
    handleLogoutClick() {
        this.props.logoutUser();
    }
    

    render(){
        const isLoggedIn = this.props.auth.isAuthenticated;
        let button;
            if (isLoggedIn) {
                button = <LogoutButton onClick={this.handleLogoutClick} />;
            } else {
                button = <LoginButton />;
            }
        return(
            
            <Navbar light  expand="sm">
                    <NavbarBrand href="/home">
                        MyHelpLogo
                    </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse   isOpen={this.state.isNavOpen} navbar>
                            <ul className="navbar-nav mr-auto" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">
                                        Home
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">
                                        About Us
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/contactus">
                                        Contact Us
                                    </Link>
                                    </li>
                                </ul>
                                {button}
                                
                    
                        </Collapse>
                </Navbar>
        );
    }
}

function LoginButton(props) {
    return (
    <><Link className="btn btn-outline-info my-2 my-sm-0" to="/Login"> Login</Link>
    <Link className="btn btn-outline-info my-2 my-sm-0 ml-3" to="/register"> Register </Link></> );
}

function LogoutButton(props) {
    return (<Link to="/home" className="btn btn-outline-info my-2 my-sm-0" onClick={props.onClick}><span className="fa fa-sign-out-alt fa-lg"></span> Logout</Link>);
}

export default Navbar1;