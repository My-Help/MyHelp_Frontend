import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
class CustomerElectrician extends Component{

    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <>
            <div className="row">
                <div className="col-md-12 container-fluid">
                    <h2 className="feature-heading container-fluid ">Electricians</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.Electricians.map((Electrician)=>{
                return(
                        <div className="col-6 mt-3">
                            <div className="card">
                            <Link to={`/Customer/${Electrician.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {Electrician.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Name: {Electrician.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-md-7">MobileNo: {Electrician.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Average Price: {Electrician.Price}
                                        </h5>
                                        <h5 className="card-title col-md-7">Gender: {Electrician.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">City: {Electrician.City}
                                        </h5>
                                        <h5 className="card-title col-md-7">Occupation: {Electrician.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">EmailID: {Electrician.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">Description: {Electrician.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Link to={`/Customer/Booking/${Electrician.ServiceProvider_Username}`}>
                                                <button className="btn btn-primary btn-md btn-block mt-2 color"  >Book Service</button>
                                            </Link>
                                        </div>
                                        <div className="col-md-6">
                                            <Link to={`/Customer/Feedback/${Electrician.ServiceProvider_Username}`}>
                                                <button className="btn btn-primary btn-md btn-block mt-2 color"  >Feedback</button>
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

export default CustomerElectrician;

