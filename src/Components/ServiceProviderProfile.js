import React from 'react'
import { Component } from 'react';
import Loading from './Loading';
const vader = require('vader-sentiment');


class ServiceProviderProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Feedback:[

            ],
            positive_feedback:"",
            negative_feedback:"",
        }
    }

    componentDidMount(){
        
        let pos = 0 
        let neg = 0
        let x = this.props.feedbacks.length
        let i =0
        for(i=0;i<x;i++){
            var input = this.props.feedbacks[i].Description
            var intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
            if (intensity.pos>intensity.neg){
                pos+=1
            }
            else{
                neg+=1
            }
        }
        this.setState({
            Feedback:this.props.feedbacks,
            positive_feedback:pos,
            negative_feedback:neg
        }
        );
    }

    
    render() {
        let ServiceProvider = null;
        if (this.props.serviceProvider != null) {
            ServiceProvider = this.props.serviceProvider
        }

        if(this.props.isLoading===true){
            return(
                <Loading/>
            );
        }
        else{
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
    
                    <div className="row container-fluid ">
                    <div className="col-md-6 mt-3 ">
                    <div className="card">
                            <div className="card-header color text-white">
                                    <h2>
                                        Positive Feedbacks
                                    </h2>
                                </div>
                            <div className="card-body">
                                <div className="row">
                                        <h3 className="col-sm-4">Count</h3>
                                        <h3 className="col-sm-6  d-flex justify-content-end">{this.state.positive_feedback}</h3>
                                </div>
                            </div>
                            </div>
                    </div>
    
                    <div className="col-md-6 mt-3">
                    <div className="card">
                            <div className="card-header color text-white">
                                    <h2>
                                        Negative Feedbacks
                                    </h2>
                                </div>
                            <div className="card-body">
                                <div className="row">
                                        <h3 className="col-sm-4">Count</h3>
                                        <h3 className="col-sm-6  d-flex justify-content-end">{this.state.negative_feedback}</h3>
                                </div>
                            </div>
                            </div>
                    </div>
    
                </div>
                    
    
                    <div className="row">
                        <div className="col-12 container-fluid mt-4">
                            <h2 className="feature-heading container-fluid">FeedBacks</h2>
                            <hr className="feature-line" />
                        </div>
                    </div>
    
                        {this.state.Feedback.map((feed)=>{
                            return(
                                
                                <div className="row col-sm-10 media container-fluid mb-2 mt-2 ">
                                    <img className="align-self-start" src="https://www.blogtyrant.com/wp-content/uploads/2013/01/how-to-get-more-blog-comments.jpg" height="50in"/>
                                    <div className="media-body border">
                                        <h5 className="mb-0 container-fluid">{feed.Customers_Username}</h5>
                                        <div className="container-fluid">{feed.Description}</div>
                                    </div>
                                </div>
                            );
                        })}
                    
                </div>
            )

        }
        
    }
}

export default ServiceProviderProfile;