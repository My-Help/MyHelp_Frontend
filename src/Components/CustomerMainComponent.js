import React,{Component} from 'react';
import { Switch, Route, Redirect,Link } from 'react-router-dom';

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
import CustomerBookedServices from './CustomerBookedServices';

import CustomerUpdateProfile from './CustomerUpdateProfile';
const vader = require('vader-sentiment');


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
            completed_booking:[]
        }
    }

    componentDidMount(){
       let customer=this.props.customers.customers.filter((customer)=>customer.Customer_Username===this.props.auth.user.username)[0]
       
       let serviceProviders_by_city = this.props.serviceProviders.serviceproviders.filter((sp)=>{
           if(typeof customer !== 'undefined'){
              return sp.City===customer.City
           }
       })

       let serviceProviders_by_city_added_feedbacks=[]
       if(serviceProviders_by_city!=null){
        serviceProviders_by_city.forEach(element=>{
            let feedbacks = this.props.feedbacks.feedbacks.filter((fb)=>fb.ServiceProvider_Username===element.ServiceProvider_Username)
            let pos = 0 
            let neg = 0
            let x = feedbacks.length
            let i =0
            for(i=0;i<x;i++){
                var input = feedbacks[i].Description
                var intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
                if (intensity.pos>intensity.neg){
                    pos+=1
                }
                else{
                    neg+=1
                }
            }
            serviceProviders_by_city_added_feedbacks.push({
                ServiceProvider_Username:element.ServiceProvider_Username,
                MobileNo:element.MobileNo,
                Price:element.Price,
                Gender:element.Gender,
                City:element.City,
                Occupation:element.Occupation,
                email:element.email,
                Description:element.Description,
                Feedback_count:pos-neg
            });
        })
       }

       let plumbers_by_city = serviceProviders_by_city_added_feedbacks.filter((plumber)=>plumber.Occupation==="Plumber")
       const plumbers_list = this.state.Plumbers.concat(plumbers_by_city)

       let carpenters_by_city = serviceProviders_by_city_added_feedbacks.filter((carpenter)=>carpenter.Occupation ==="Carpenter")
       const carpenters_list = this.state.Carpenters.concat(carpenters_by_city)
       
       let electricians_by_city = serviceProviders_by_city_added_feedbacks.filter((electricians)=>electricians.Occupation==="Electrician")
       const electricians_list = this.state.Electricians.concat(electricians_by_city)

       let barbers_by_city = serviceProviders_by_city_added_feedbacks.filter((barber)=>barber.Occupation==="Barber")
       const barbers_list = this.state.Barbers.concat(barbers_by_city)

       let applianceRepair_by_city = serviceProviders_by_city_added_feedbacks.filter((applianceRepair)=>applianceRepair.Occupation==="Appliance Repair")
       const applianceRepair_list = this.state.ApplianceRepair.concat(applianceRepair_by_city)
       
       let acServiceRepair_by_city = serviceProviders_by_city_added_feedbacks.filter((acServiceRepair)=>acServiceRepair.Occupation==="AC Service/Repair")
       const acServiceRepair_list = this.state.ACServiceRepair.concat(acServiceRepair_by_city)

       let booking=[]
       let ct_booking = this.props.bookings.bookings.filter((ct)=>(ct.Customers_Username===this.props.auth.user.username))
       ct_booking = ct_booking.filter((booking)=>booking.Completed===false)
       if (ct_booking!=null){
        ct_booking.forEach(element=>{
            booking.push({
                id:element._id,
                ServiceProviders_Username:element.ServiceProviders_Username,
                DateTime:element.DateTime,
                ProblemDescription:element.ProblemDescription,
                TimeSlot:element.TimeSlot,
                Action:<div>
                <i className="fa fa-check-circle resolve mr-2" onClick={()=>{
                    if(element.Feedback===false){
                        alert("Please Provide Feedback")
                    }
                    else if(window.confirm("Are you sure Your Booked Service is Completed")){
                        let booking_update={
                            id:element._id,
                            Customers_Username:element.Customers_Username,
                            ServiceProviders_Username:element.ServiceProviders_Username,
                            DateTime:element.DateTime,
                            ProblemDescription:element.ProblemDescription,
                            TimeSlot:element.TimeSlot,
                            Completed:true
                        }
                        this.props.updateBooking(booking_update)
                    }
                }} ></i>
                
                    <Link to={`/Customer/Feedback/${element._id}`}>
                    <i class="fas feed mr-2 fa-clipboard-list">
                    </i>
                    </Link>
           
                <i className="fa fa-trash-alt delete" onClick={() => {
                if (window.confirm("Are you sure you want to delete ?"))
                    this.props.deletebooking(element._id)
                }}></i>
              </div>
            })
        });
    }


       const ctbooking_list = this.state.bookings.concat(booking)
       
       let completed_bookings = this.props.bookings.bookings.filter((ct)=>(ct.Customers_Username===this.props.auth.user.username))

       completed_bookings=completed_bookings.filter((el)=>el.Completed===true)

       this.setState({
           customer:customer,
           Plumbers: plumbers_list,
           Carpenters:carpenters_list,
           Barbers:barbers_list,
           Electricians:electricians_list,
           ApplianceRepair:applianceRepair_list,
           ACServiceRepair:acServiceRepair_list,
           bookings:ctbooking_list,
           completed_booking:completed_bookings
       });

    }
    

    render(){
        const Booking = ({match})=>{
            return(
                <BookingForm Service_provider_username={match.params.username} Customer_username={this.state.customer.Customer_Username} postBooking = {this.props.postBooking}/>
            );
        }

        const Feedback =({match})=>{
            return(
                <FeedbackForm booking_details={this.state.bookings.filter((el)=>el.id===match.params.username)[0]} Customer_username={this.state.customer.Customer_Username} postFeedBack ={this.props.postFeedBack} updateBooking={this.props.updateBooking}/>
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
                        <Route path="/Customer/Profile" component={()=><CustomerProfile customer={this.state.customer} isLoading={this.props.customers.isLoading} />}/>
                        <Route path="/Customer/UpdateProfile" component={()=><CustomerUpdateProfile customer={this.state.customer} updateCustomerInfo ={this.props.updateCustomerInfo}/>}  />
                        <Route path="/Customer/services" component={()=><Services/>} />
                        <Route path="/Customer/Plumbers" component={()=><CustomerPlumbers plumbers={this.state.Plumbers.sort((a,b)=>b.Feedback_count-a.Feedback_count)}/>}/>
                        <Route path="/Customer/AC ServiceRepair" component={()=><CustomerAC ACServiceRepair={this.state.ACServiceRepair.sort((a,b)=>b.Feedback_count-a.Feedback_count)}/>}/>
                        <Route path="/Customer/Appliance Repair" component={()=><CustomerAppliance ApplianceRepair = {this.state.ApplianceRepair.sort((a,b)=>b.Feedback_count-a.Feedback_count)}/>}/>
                        <Route path="/Customer/Electricians" component={()=><CustomerElectrician Electricians = {this.state.Electricians.sort((a,b)=>b.Feedback_count-a.Feedback_count)}/>}/>
                        <Route path="/Customer/Carpenters" component={()=><CustomerCarpenter Carpenters = {this.state.Carpenters.sort((a,b)=>b.Feedback_count-a.Feedback_count)}/>}/>
                        <Route path="/Customer/Barbers" component={()=><CustomerBarber Barbers = {this.state.Barbers.sort((a,b)=>b.Feedback_count-a.Feedback_count)} />}/>
                        <Route path = "/Customer/Booking/:username" component={Booking}/>
                        <Route path = "/Customer/Feedback/:username" component={Feedback}/>
                        <Route path ="/Customer/Bookings" component={()=><CustomerBookings bookings = {this.state.bookings}/>}/>
                        <Route path="/Customer/AvailServices" component={()=><CustomerBookedServices bookings={this.state.completed_booking}/>}/>
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