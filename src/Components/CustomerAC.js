import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
class CustomerAC extends Component{

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
                    <h2 className="feature-heading ">AC Service/Repair</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.ACServiceRepair.map((ac)=>{
                return(
                        <div className="col-6 mt-3">
                            <div className="card">
                            <Link to={`/Customer/${ac.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {ac.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-sm-5">Name: {ac.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-sm-7">MobileNo: {ac.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-sm-5">Average Price: {ac.Price}
                                        </h5>
                                        <h5 className="card-title col-sm-7">Gender: {ac.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-sm-5">City: {ac.City}
                                        </h5>
                                        <h5 className="card-title col-sm-7">Occupation: {ac.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-sm-12">EmailID: {ac.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-sm-12">Description: {ac.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Link to={`/Customer/Booking/${ac.ServiceProvider_Username}`}>
                                                <button className="btn btn-primary btn-md btn-block mt-2 color"  >Book Service</button>
                                            </Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <Link to={`/Customer/Feedback/${ac.ServiceProvider_Username}`}>
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

export default CustomerAC;

