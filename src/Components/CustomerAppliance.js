import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
class CustomerAppliance extends Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <>
            <div className="row">
                <div className="col-12 container-fluid">
                    <h2 className="feature-heading container-fluid ">Appliance Repair</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.ApplianceRepair.map((Appliance)=>{
                return(
                        <div className="col-md-6 mt-3">
                            <div className="card">
                            <Link to={`/Customer/${Appliance.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {Appliance.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Name: {Appliance.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-md-7">MobileNo: {Appliance.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Average Price: {Appliance.Price}
                                        </h5>
                                        <h5 className="card-title col-md-7">Gender: {Appliance.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">City: {Appliance.City}
                                        </h5>
                                        <h5 className="card-title col-md-7">Occupation: {Appliance.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">EmailID: {Appliance.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">Description: {Appliance.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to={`/Customer/Booking/${Appliance.ServiceProvider_Username}`}>
                                                <button className="btn btn-primary btn-md btn-block mt-2 color"  >Book Service</button>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                );
            })}
            </div>
            </>
        );
    }

}

export default CustomerAppliance;

