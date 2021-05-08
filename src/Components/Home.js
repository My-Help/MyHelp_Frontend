import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Header from './Header'
import {Link} from 'react-router-dom';
class Home extends Component{
    
    render(){
        return(
            <>
            
        <Header/>
        <Jumbotron  className="container-fluid " style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col-12">
                    <h4 className="d-flex justify-content-center"> Services We Provide </h4>
                    <hr className="hr_reduced"/>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card head" style={{backgroundImage:`url(./images/Plumber.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <div className="row">
                                <h5 className="card-title col-6 mb-5" >Plumber</h5>
                            </div>
                            
                            <Link to="/PlumberView" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card head" style={{backgroundImage:`url(./images/Carpenter.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Carpenter</h5>
                            
                            <Link to="/CarpenterView" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card head" style={{backgroundImage:`url(./images/Elec.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Electrician</h5>
                            
                            <Link to="/ElectricianView" className="card-link">Details</ Link>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card head " style={{backgroundImage:`url(./images/AC.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">AC Service/Repair</h5>
                            
                            <Link to="/ACView" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card head" style={{backgroundImage:`url(./images/barber.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Barber</h5>
                            
                            <Link to="/BarberView" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card head" style={{backgroundImage:`url(./images/Repair.png)`,boxShadow:"0px 5px 25px rgba(0, 0, 0, 0.2)"}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Appliance Repair</h5>
                            
                            <Link to="/ApplianceView" className="card-link">Details</ Link>
                        </div>
                    </div>
                    
                </div>

            </div>

            
        </Jumbotron>
        </>
        );
    }
}

export default Home
