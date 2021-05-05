import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <Jumbotron style={{backgroundImage:`url(https://gust-production.s3.amazonaws.com/uploads/startup/panoramic_image/911706/jumbotron-bg.png)`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                <div className="row">
                    <div className="conatiner-fluid col-sm-7 " style={{color:"white", backgroundColor:"rgba(20, 39, 78, 0.8)",marginLeft:"6%"}}>
                        <h1 className="container-fluid" style={{paddingTop:"2%"}}>My Help</h1>
                        <hr color="white" className="w-60" />
                        <p className="container-fluid d-flex justify-content-center">
                        MyHelp is a platform for both the local service providers and customers to interact with
each other for mutual benefits. It is an unconventional platform where the website acts
as a platform for service providers to sell their service at their own price unlike the
conventional form of service providing where the company actually employs people to
provide service.
                        </p>
                    </div>
            </div>
        </Jumbotron>
        );
    }
}

export default Header;