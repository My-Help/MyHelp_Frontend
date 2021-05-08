import React,{Component} from 'react';
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback } from 'reactstrap';
class CustomerUpdateProfile extends Component {

    constructor(props){
        super(props);
        this.state={
        id:(typeof this.props.customer === 'undefined') ? '' : this.props.customer._id,
        Name:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.Name,
        MobileNo:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.mobileNo,
        Gender:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.Gender,
        City:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.City,
        Address:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.Address,
        Email:(typeof this.props.customer === 'undefined') ? '' : this.props.customer.email,
        touched: {
            Name:false,
            MobileNo:false,
            City:false,
            Address:false,
            Email:false,
        }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateCustomerInfo(
            this.state
        );
        
        
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (Name,MobileNo,Email,City) => {
        const errors = {
            Name:'',
            MobileNo:'',
            Email:'',
            City:'',

        }
        if (this.state.touched.Name && Name.length < 3)
            errors.Name = 'Name should be of minimum length of 3 characters';
        if (this.state.touched.Name && Name.length > 30)
            errors.Name = 'Name should not be greater than 30 characters';
        
        if (this.state.touched.City && City.length < 2)
            errors.City = 'Enter Valid City';

        const reg = /^\d{10}$/;
        if (this.state.touched.MobileNo && !reg.test(MobileNo))
            errors.MobileNo = 'Enter a valid Mobile Number';
        if (this.state.touched.Email && Email.split('').filter(x => x === '@').length !== 1)
            errors.Email = 'Enter a valid email';
        return errors;
    }

    render(){
        const errors = this.validate(
            this.state.Name,
            this.state.MobileNo,
            this.state.Email,
            this.state.City);
        return(
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 container-fluid">
                        <h2 className="feature-heading ">Update Your Profile</h2>
                        <hr className="feature-line" />
                    </div>
                </div>
                <Form className="container-fluid myForm" onSubmit={this.handleSubmit}>
                    <Row className="container-fluid" form>
                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">
                                <Label htmlFor="Name">Name</Label>
                                <Input required type="text" id="Name" name="Name"
                                    value={this.state.Name}
                                    onChange={this.handleInputChange} valid={errors.Name === ''} invalid={errors.Name !== ''} onBlur={this.handleBlur('Name')} />
                                <FormFeedback>{errors.Name}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">

                                <Label htmlFor="MobileNo">Mobile Number</Label>
                                <Input type="text" id="MobileNo" name="MobileNo"
                                    value={this.state.MobileNo}
                                    onChange={this.handleInputChange} valid={errors.MobileNo === ''} invalid={errors.MobileNo !== ''} onBlur={this.handleBlur('MobileNo')} />
                                <FormFeedback>{errors.MobileNo}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="container-fluid" form>
                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">
                                <Label htmlFor="Gender">Gender</Label>
                                <Input required type="select" name="Gender" id="Gender" value={this.state.Gender} className="form-control"
                                        onChange={this.handleInputChange} >
                                        <option defaultValue>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Input>
                                <FormFeedback>{errors.Gender}</FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">
                                <Label htmlFor="Address">Address</Label>
                                <Input type="text" id="Address" name="Address"
                                    value={this.state.Address}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="container-fluid" form>
                        
                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">
                                <Label htmlFor="City">City</Label>
                                <Input type="text" id="City" name="City"
                                    value={this.state.City}
                                    onChange={this.handleInputChange} valid={errors.City === ''} invalid={errors.City !== ''} onBlur={this.handleBlur('City')} />
                                <FormFeedback>{errors.City}</FormFeedback>
                            </FormGroup>
                        </Col>

                        <Col className="container-fluid" md={6}>
                            <FormGroup className="container-fluid">
                                <Label htmlFor="Email">Email</Label>
                                <Input type="text" id="Email" name="Email"
                                    value={this.state.Email}
                                    onChange={this.handleInputChange} valid={errors.Email === ''} invalid={errors.Email !== ''} onBlur={this.handleBlur('Email')} />
                                <FormFeedback>{errors.Email}</FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <Button type="submit" className="ml-2 mb-2" style={{backgroundColor:"#14274e"}}>
                        Update
                    </Button>
                </Form>
            </div>
        );
    }

}

export default CustomerUpdateProfile;