import React,{Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

import CustomerLeftNav from './CustomerLeftNav';
import CustomerProfile from './CustomerProfile';
import Services from './ServicesComponent';
import BookingForm from './BookingForm';
import FeedbackForm from './ServiceProviderFeedbackForm';

import CustomerPlumbers from './CustomerPlumbers';
import CustomerAC from './CustomerAC';
import CustomerAppliance from './CustomerAppliance';
import CustomerElectrician from './CustomerElectrician';
import CustomerCarpenter from './CustomerCarpenter';
import CustomerBarber from './CustomerBarber';
import CustomerBookings from './CustomerBookings';
import ServiceProviderProfile  from './ServiceProviderProfile';
class CustomerMainComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            Plumbers:[],
            Carpenters:[],
            Barbers:[],
            ApplianceRepair:[],
            ACServiceRepair:[],
            Electricians:[],
            customer:{},
            bookings:[],
        }
    }

    componentDidMount(){
       let customer=this.props.customers.customers.filter((customer)=>customer.Customer_Username===this.props.auth.user.username)[0]
       
       let serviceProviders_by_city = this.props.serviceProviders.serviceproviders.filter((sp)=>sp.City === customer.City)

       let plumbers_by_city = serviceProviders_by_city.filter((plumber)=>plumber.Occupation==="Plumber")
       const plumbers_list = this.state.Plumbers.concat(plumbers_by_city)

       let carpenters_by_city = serviceProviders_by_city.filter((carpenter)=>carpenter.Occupation ==="Carpenter")
       const carpenters_list = this.state.Carpenters.concat(carpenters_by_city)
       
       let electricians_by_city = serviceProviders_by_city.filter((electricians)=>electricians.Occupation==="Electrician")
       const electricians_list = this.state.Electricians.concat(electricians_by_city)

       let barbers_by_city = serviceProviders_by_city.filter((barber)=>barber.Occupation==="Barber")
       const barbers_list = this.state.Barbers.concat(barbers_by_city)

       let applianceRepair_by_city = serviceProviders_by_city.filter((applianceRepair)=>applianceRepair.Occupation==="Appliance Repair")
       const applianceRepair_list = this.state.ApplianceRepair.concat(applianceRepair_by_city)
       
       let acServiceRepair_by_city = serviceProviders_by_city.filter((acServiceRepair)=>acServiceRepair.Occupation==="AC Service/Repair")
       const acServiceRepair_list = this.state.ACServiceRepair.concat(acServiceRepair_by_city)

       let ct_booking = this.props.bookings.bookings.filter((ct)=>ct.Customers_Username===this.props.auth.user.username)
       const ctbooking_list = this.state.bookings.concat(ct_booking)

       

       this.setState({
           customer:customer,
           Plumbers: plumbers_list,
           Carpenters:carpenters_list,
           Barbers:barbers_list,
           Electricians:electricians_list,
           ApplianceRepair:applianceRepair_list,
           ACServiceRepair:acServiceRepair_list,
           bookings:ctbooking_list
       });

    }

    render(){
        console.log(this.state.bookings)
        const Booking = ({match})=>{
            return(
                <BookingForm Service_provider_username={match.params.username} Customer_username={this.state.customer.Customer_Username} postBooking = {this.props.postBooking}/>
            );
        }

        const Feedback =({match})=>{
            return(
                <FeedbackForm Service_provider_username={match.params.username} Customer_username={this.state.customer.Customer_Username} postFeedBack ={this.props.postFeedBack}/>
            );
        }

        const ServiceProviderProfil = ({match})=>{
            let service_provider = match.params.username
            return(
                <ServiceProviderProfile serviceProvider= {this.props.serviceProviders.serviceproviders.filter((sp)=>sp.ServiceProvider_Username==service_provider)[0]} feedbacks = {this.props.feedbacks.feedbacks.filter((fb)=>fb.ServiceProvider_Username===service_provider)} />
            );
        }
        return(
        <>
            <Header/>
            <div className="row w-100">
            
                <div className="mb-3 col-md-2">
                    <CustomerLeftNav />
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path="/Customer/Profile" component={()=><CustomerProfile customer={this.state.customer} />}/>
                        <Route path="/Customer/services" component={()=><Services/>} />
                        <Route path="/Customer/Plumbers" component={()=><CustomerPlumbers plumbers={this.state.Plumbers}/>}/>
                        <Route path="/Customer/AC ServiceRepair" component={()=><CustomerAC ACServiceRepair={this.state.ACServiceRepair}/>}/>
                        <Route path="/Customer/Appliance Repair" component={()=><CustomerAppliance ApplianceRepair = {this.state.ApplianceRepair}/>}/>
                        <Route path="/Customer/Electricians" component={()=><CustomerElectrician Electricians = {this.state.Electricians}/>}/>
                        <Route path="/Customer/Carpenters" component={()=><CustomerCarpenter Carpenters = {this.state.Carpenters}/>}/>
                        <Route path="/Customer/Barbers" component={()=><CustomerBarber Barbers = {this.state.Barbers} />}/>
                        <Route path = "/Customer/Booking/:username" component={Booking}/>
                        <Route path = "/Customer/Feedback/:username" component={Feedback}/>
                        <Route path ="/Customer/Bookings" component={()=><CustomerBookings bookings = {this.state.bookings}/>}/>
                        <Route path="/Customer/:username" component={ServiceProviderProfil}/>
                        <Redirect to="/home" component={()=><Home />} />
                    </Switch>
                </div>
            </div>
        
        </>
        );
    }
}

export default CustomerMainComponent;