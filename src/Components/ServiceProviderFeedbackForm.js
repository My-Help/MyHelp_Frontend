import React, { Component } from 'react'
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';

class FeedbackForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ServiceProvider_Username:"",
            Customer_Username:"",
            Description:''
            }
        }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.postFeedBack(this.state)

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
            ServiceProvider_Username:this.props.Service_provider_username,
            Customer_Username:this.props.Customer_username
        });
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