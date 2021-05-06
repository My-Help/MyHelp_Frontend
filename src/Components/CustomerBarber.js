import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
class CustomerBarber extends Component{

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
                    <h2 className="feature-heading container-fluid ">Barbers</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.Barbers.map((barber)=>{
                return(
                        <div className="col-md-6 mt-3">
                            <div className="card">
                            <Link to={`/Customer/${barber.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {barber.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Name: {barber.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-md-7">MobileNo: {barber.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Average Price: {barber.Price}
                                        </h5>
                                        <h5 className="card-title col-md-7">Gender: {barber.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">City: {barber.City}
                                        </h5>
                                        <h5 className="card-title col-md-7">Occupation: {barber.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">EmailID: {barber.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">Description: {barber.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to={`/Customer/Booking/${barber.ServiceProvider_Username}`}>
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

export default CustomerBarber;

