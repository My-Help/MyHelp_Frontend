import React from 'react'
import { Component } from 'react';

class ServiceProviderProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Feedback:[

            ],
        }
    }

    componentDidMount(){
        this.setState({
            Feedback:this.props.feedbacks
        }
        );
    }

    
    render() {
        console.log(this.props)
        let ServiceProvider = null;
        if (this.props.serviceProvider != null) {
            ServiceProvider = this.props.serviceProvider
        }

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
                                    {ServiceProvider !== null && ServiceProvider.ServiceProvider_Username}'s Profile
                                </h2>
                            </div>
                            <div className="card-body">
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Name:</h5>
                                    <h5 className="card-title col-sm-3 ">{ServiceProvider !== null && ServiceProvider.Name}</h5>

                                    <h5 className="card-title col-sm-3 ">Mobile Number:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.MobileNo}</h5>

                                </div>
                                
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">City:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.City}</h5>

                                    <h5 className="card-title col-sm-3 ">Gender:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.Gender}</h5>

                                </div>
                                
                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3 ">Occupation:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.Occupation}</h5>

                                    <h5 className="card-title col-sm-3 ">Average Price:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.Price}</h5>

                                </div>
                                

                                <div className="row d-flex justify-content-start">

                                    <h5 className="card-title col-sm-3">Email:</h5>
                                    <h5 className="card-title col-sm">{ServiceProvider !== null && ServiceProvider.email}</h5>

                                </div>

                                <div className="row d-flex justify-content-start">
                                    
                                <h5 className="card-title col-sm-3">Description:</h5>
                                    <h5 className="card-title col-sm-3">{ServiceProvider !== null && ServiceProvider.Description}</h5>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 container-fluid mt-2">
                        <h2 className="feature-heading container-fluid">FeedBack</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div className="row">
                    {this.state.Feedback.map((feed)=>{
                        return(
                            <ul>
                                <li>
                                <div className="col-12 mb-2 mt-2">
                                <p><strong>{feed.Description}</strong> -{feed.Customers_Username}</p>     
                            </div>
                                </li>
                            
                            </ul>
                        );
                    })}
                </div>
                
            </div>
        )
    }
}

export default ServiceProviderProfile;