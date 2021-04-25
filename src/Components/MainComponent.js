import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import ServiceProviderMainComponent from './ServiceProviderMainComponent';

import Home from './Home';

import Navbar1 from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './Register';
import Contact from './Contactus';
import AboutUs from './AboutUs';
import CustomerMainComponent from './CustomerMainComponent';
import PlumberView from './PlumberView';
import ApplianceView from './ApplianceRepairView';
import CarpenterView from './CarpenterView';
import BarberView from './BarberView';
import ACView from './ACView';
import ElectricianView from './ElectricianView'; 
import { connect } from 'react-redux';


import {
    postCustomer,postBooking,postFeedback,postServiceProvider,fetchCustomers,fetchServiceProviders,fetchbookings,fetchfeedbacks,loginUser,logoutUser,deletebooking
} from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
    postCustomer: (customer) => dispatch(postCustomer(customer)),
    postServiceProvider: (serviceProvider) => dispatch(postServiceProvider(serviceProvider)),
    postBooking: (booking) => dispatch(postBooking(booking)),
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    
    fetchCustomers: () => dispatch(fetchCustomers()),
    fetchServiceProviders: () => dispatch(fetchServiceProviders()),
    fetchbookings: () => dispatch(fetchbookings()),
    fetchfeedbacks: () => dispatch(fetchfeedbacks()),
    
    deletebooking: (bookingId) => dispatch(deletebooking(bookingId)),

    loginUser: (creds) => dispatch(loginUser(creds)),
    logoutUser: () => dispatch(logoutUser()),
})

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        serviceProviders: state.serviceProviders,
        bookings: state.bookings,
        feedbacks: state.feedbacks,
        auth: state.auth,
    }
}


class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            service_providers_view : [

            ],
        }
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.fetchCustomers();
            this.props.fetchServiceProviders();
            this.props.fetchbookings();
            this.props.fetchfeedbacks();
            this.props.loginUser(JSON.parse(localStorage.getItem('creds')));
        }
        else{
            this.props.fetchServiceProviders();
        }
    }

    render(){
        const CustomerRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && !this.props.auth.admin
                    ? <Component {...props}/>
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );
        
        const ServiceProviderRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
                this.props.auth.isAuthenticated && this.props.auth.admin
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/home',
                        state: { from: props.location }
                    }} />
            )} />
        );
        console.log(this.props)
        return(
            
            <div>
            <Navbar1 auth={this.props.auth} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/>
            <Switch>
                <Route path="/home" component={() => <Home />} />
                <Route path="/Login" component={() => <LoginForm auth={this.props.auth} loginUser={this.props.loginUser} />} />
                <ServiceProviderRoute path='/ServiceProvider' component = {()=><ServiceProviderMainComponent customers = {this.props.customers} bookings={this.props.bookings} feedbacks={this.props.feedbacks} serviceProviders = {this.props.serviceProviders} auth={this.props.auth} deletebooking={this.props.deletebooking} />}/>
                <CustomerRoute path='/Customer' component = {()=><CustomerMainComponent customers = {this.props.customers} feedbacks={this.props.feedbacks} serviceProviders = {this.props.serviceProviders} bookings={this.props.bookings} auth={this.props.auth} postBooking = {this.props.postBooking} postFeedBack = {this.props.postFeedback} />}/>
                <Route path="/register" component={()=><SignupForm postCustomer= {this.props.postCustomer} postServiceProvider={this.props.postServiceProvider}/>}/>
                <Route path="/contactus" component={()=><Contact/>}/>
                <Route path="/aboutus" component = {()=><AboutUs/>}/>
                <Route path="/PlumberView" component={()=><PlumberView plumbers={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="Plumber")} />}/>
                <Route path="/ApplianceView" component={()=><ApplianceView appliances={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="Appliance Repair")}/>}/>
                <Route path="/CarpenterView" component={()=><CarpenterView carpenters={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="Carpenter")}/>}/>
                <Route path="/BarberView" component={()=><BarberView barbers={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="Barber")}/>}/>
                <Route path="/ACView" component={()=><ACView acrepairs={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="AC Service/Repair")}/>}/>
                <Route path="/ElectricianView" component={()=><ElectricianView electricians={this.props.serviceProviders.serviceproviders.filter((sp)=>sp.Occupation==="Electrician")}/>}/>
                <Redirect to="/home" component={()=><Home />} />
            </Switch>
            <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;