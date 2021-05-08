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
            
            <Navbar light style={{backgroundColor:"#14274e"}}   expand="sm">
                    <NavbarBrand>
                        <Link to='/home'>
                        <img src="./images/my help logo light.png" width="200"
                                alt="MyHelpLogo" />
                        </Link>
                    
                    </NavbarBrand>
                        <NavbarToggler style={{backgroundColor:"white"}}  onClick={this.toggleNav} />
                        <Collapse  isOpen={this.state.isNavOpen} navbar>
                            <ul className="navbar-nav mr-auto" >
                                <li className="nav-item ">
                                    <Link className="nav-link"  to="/home">
                                        <span className="navcol" >
                                        <span className="fa fa-home fa-lg"></span> Home
                                        </span>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">
                                        <span  className="navcol">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                        </span>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link" to="/contactus">
                                        <span className="navcol" >
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                        </span>
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Login">
                                            <span className="navcol">
                                            <i class="fa fa-user" aria-hidden="true"></i> Go to Profile
                                            </span>
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
    <><Link className="btn btn-outline-info my-2 my-sm-0" to="/Login" style={{color:"white"}}>
        <i class="fa fa-user-circle" aria-hidden="true"></i> Login</Link>
    <Link className="btn btn-outline-info my-2 my-sm-0 ml-3" to="/register" style={{color:"white"}}> <span className="fa fa-sign-in-alt fa-lg"></span> Register </Link></> );
}

function LogoutButton(props) {
    return (<Link to="/home" className="btn btn-outline-info my-2 my-sm-0" onClick={props.onClick} style={{color:"white"}}><span className="fa fa-sign-out-alt fa-lg" style={{color:"white"}}></span> Logout</Link>);
}

export default Navbar1;