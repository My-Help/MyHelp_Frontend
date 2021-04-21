import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <Jumbotron>
                <div className="row">
                    <div className="conatiner-fluid col-6 ">
                        <h1>My Help</h1>
                        <hr />
                        <p className="container-fluid d-flex justify-content-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                        </p>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <img src="#" alt="LOGO"/>
                    </div>
            </div>
        </Jumbotron>
        );
    }
}

export default Header;