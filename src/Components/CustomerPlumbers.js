import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CustomerPlumbers extends Component{

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <>
            <div className="row">
                <div className="col-md-12 container-fluid">
                    <h2 className="feature-heading container-fluid ">Plumbers</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.plumbers.map((plumber)=>{
                return(
                        <div className="col-md-6 mt-3">
                            <div className="card">
                                <Link to={`/Customer/${plumber.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {plumber.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Name: {plumber.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-md-7">MobileNo: {plumber.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Average Price: {plumber.Price}
                                        </h5>
                                        <h5 className="card-title col-md-7">Gender: {plumber.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">City: {plumber.City}
                                        </h5>
                                        <h5 className="card-title col-md-7">Occupation: {plumber.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">EmailID: {plumber.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">Description: {plumber.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to={`/Customer/Booking/${plumber.ServiceProvider_Username}`}>
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

export default CustomerPlumbers;

