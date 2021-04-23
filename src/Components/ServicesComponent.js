import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';
import {Link} from "react-router-dom";
class Services extends Component{
    
    render(){
        return(
            <>
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col-12">
                    <h4 className="d-flex justify-content-center"> Services We Provide </h4>
                    <hr className="hr_reduced"/>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">Plumber</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/Plumbers" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Carpenter</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/Carpenters" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Electrician</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Details</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/Electricians" className="card-link">Details</ Link>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">AC Service/Repair</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Details</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/AC ServiceRepair" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Barber</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/Barbers" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Appliance Repair</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <Link to="/Customer/Appliance Repair" className="card-link">Details</ Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        </>
        );
    }
}

export default Services
