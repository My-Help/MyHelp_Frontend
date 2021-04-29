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
                    <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/HgK7B3f/Plumber.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Plumber</h5>
                            
                            <Link to="/Customer/Plumbers" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/M2gxKzJ/Carpenter.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Carpenter</h5>
                            
                            <Link to="/Customer/Carpenters" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/L0MtKKt/Elec.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Electrician</h5>
                            
                            <Link to="/Customer/Electricians" className="card-link">Details</ Link>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="row ">
                <div className="col-md-4 mt-3 ">
                    <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/qFPV9GG/AC.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">AC Service/Repair</h5>
                            
                            <Link to="/Customer/AC ServiceRepair" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3">
                    <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/xH99m7D/Barber.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Barber</h5>
                            
                            <Link to="/Customer/Barbers" className="card-link">Details</ Link>
                        </div>
                        </div>
                </div>

                <div className="col-md-4 mt-3 ">
                        <div className="card head boxsh" style={{backgroundImage:`url(https://i.ibb.co/BnjBsNR/Repair.png)`}}>
                        <div className="card-body">
                            <h5 className="card-title mb-5">Appliance Repair</h5>
                            
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
