import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ServiceProvider_Username:"",
            Customer_Username:"",
            Description:'',
            updatedbooking:{}
            }
        }

    handleSubmit = (event) => {
        event.preventDefault();
        let feedback={
            ServiceProvider_Username:this.state.ServiceProvider_Username,
            Customer_Username:this.state.Customer_Username,
            Description:this.state.Description
        }
        this.props.postFeedBack(feedback);
        this.props.updateBooking(this.state.updatedbooking)

    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount(){
        if(typeof this.props.booking_details !== 'undefined'){

            let updated_booking={
                id:this.props.booking_details.id,
                Customers_Username:this.props.Customer_username,
                ServiceProviders_Username:this.props.booking_details.ServiceProviders_Username,
                DateTime:this.props.booking_details.DateTime,
                ProblemDescription:this.props.booking_details.ProblemDescription,
                TimeSlot:this.props.booking_details.TimeSlot,
                Completed:false,
                Feedback:true
            }

            this.setState({
                ServiceProvider_Username:this.props.booking_details.ServiceProviders_Username,
                Customer_Username:this.props.Customer_username,
                updatedbooking:updated_booking
            });

        }
        
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">FeedBack</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm container-fluid" onSubmit={this.handleSubmit}>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="ServiceProvider_Username">ServiceProvider Username</Label>
                                    <Input required type="text" name="ServiceProvider_Username" id="ServiceProvider_Username" value={this.state.ServiceProvider_Username}onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        <Col md={4}>
                                <FormGroup>
                                    <Label for="Description">Description</Label>
                                    <Input required type="textarea" rows={4} name="Description" value={this.state.Description} id="Description" onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={8} className="d-flex justify-content-end">
                                <Button type="submit" className="color">
                                    Submit
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

}
export default FeedbackForm;