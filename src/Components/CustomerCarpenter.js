import React, {Component} from 'react';
import {Card} from 'reactstrap';
import {Link} from 'react-router-dom';
class CustomerCarpenter extends Component{

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
                    <h2 className="feature-heading container-fluid">Carpenters</h2>
                    <hr className="feature-line" />
                </div>
            </div>
            <div className="container-fluid row mb-5">
            {this.props.Carpenters.map((Carpenter)=>{
                return(
                        <div className="col-md-6 mt-3">
                            <div className="card">
                            <Link to={`/Customer/${Carpenter.ServiceProvider_Username}`}>
                                <div className="card-header color" style={{fontWeight:'bold'},{fontSize:"20px"}}>
                                    {Carpenter.ServiceProvider_Username}
                                </div>
                                </Link>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Name: {Carpenter.ServiceProvider_Username}
                                        </h5>
                                        <h5 className="card-title col-md-7">MobileNo: {Carpenter.MobileNo}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">Average Price: {Carpenter.Price}
                                        </h5>
                                        <h5 className="card-title col-md-7">Gender: {Carpenter.Gender}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-5">City: {Carpenter.City}
                                        </h5>
                                        <h5 className="card-title col-md-7">Occupation: {Carpenter.Occupation}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">EmailID: {Carpenter.email}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-title col-md-12">Description: {Carpenter.Description}
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <Link to={`/Customer/Booking/${Carpenter.ServiceProvider_Username}`}>
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

export default CustomerCarpenter;

