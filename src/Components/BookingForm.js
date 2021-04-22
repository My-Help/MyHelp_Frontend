import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Customer_Username:'',
            ServiceProvider_Username:'',
            Time:'',
            Date:'',
            Description:''
            }
        }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postBooking(this.state);

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
        this.setState({
            Customer_Username:this.props.Customer_username,
            ServiceProvider_Username:this.props.Service_provider_username
        });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Book Your Service</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <div >
                    <Form className="myForm" onSubmit={this.handleSubmit}>
                        
                        <Row form>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Date">Date</Label>
                                    <Input required type="date" name="Date" value={this.state.Date} id="Date"  onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="Time">Time</Label>
                                    <Input required type="time" name="Time" value={this.state.Time} id="Time"  onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                        <Col md={4}>
                                <FormGroup>
                                    <Label for="Description">Description</Label>
                                    <Input required type="textarea" rows={4} name="Description" value={this.state.Description} id="Description" onChange={this.handleInputChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" className="color">
                                    Book
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

}
export default BookingForm;