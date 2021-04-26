import React,{Component} from 'react';
import {Jumbotron} from 'reactstrap';
import Header from './Header'
class Home extends Component{
    
    render(){
        return(
            <>
            
        <Header/>
        <Jumbotron className="container-fluid">
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
                            <div className="row">
                                <h5 className="card-title col-6 container-fluid">Plumber</h5>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <a href="/PlumberView" className="card-link">Details</ a>
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
                            <a href="/CarpenterView" className="card-link">Details</ a>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Electrician</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <a href="/ElectricianView" className="card-link">Details</ a>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">AC Service/Repair</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">
                            Content
                            </p>
                            <a href="/ACView" className="card-link">Details</ a>
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
                            <a href="/BarberView" className="card-link">Details</ a>
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
                            <a href="/ApplianceView" className="card-link">Details</ a>
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
