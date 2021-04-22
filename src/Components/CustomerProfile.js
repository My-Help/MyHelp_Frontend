import React from 'react'
import { Component } from 'react';

class CustomerProfile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let Customer = null;
        if (this.props.customer != null) {
            Customer = this.props.customer
        }
        console.log(this.props)
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading container-fluid">Profile</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header color text-white">
                                <h2>
                                    {Customer !== null && Customer.Customer_Username}'s Profile
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Name:</h5>
                                    <h5 className="card-title col-sm-3 ">{Customer !== null && Customer.Name}</h5>

                                    <h5 className="card-title col-sm-3 ">Mobile Number:</h5>
                                    <h5 className="card-title col-sm-3">{Customer !== null && Customer.mobileNo}</h5>

                                </div>
                                
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">City:</h5>
                                    <h5 className="card-title col-sm-3">{Customer !== null && Customer.City}</h5>

                                    <h5 className="card-title col-sm-3 ">Gender:</h5>
                                    <h5 className="card-title col-sm-3">{Customer !== null && Customer.Gender}</h5>

                                </div>
                                

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3">Email:</h5>
                                    <h5 className="card-title col-sm">{Customer !== null && Customer.email}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">
                                    
                                <h5 className="card-title col-sm-3">Address:</h5>
                                    <h5 className="card-title col-sm-3">{Customer !== null && Customer.Address}</h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerProfile;