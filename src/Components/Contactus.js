import React, { useState } from 'react';
import { Form, Input, Button, Label, Col, Row, FormGroup, FormFeedback, Jumbotron } from 'reactstrap';


function Contact(props) {

    const [initialState, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        touched: {
            name: false,
            email: false,
            subject: false,
            message: false
        }
    })

    //const history = useHistory();
    const handleSubmit = (event) => {
        //const history = useHistory();
        const message = initialState.message+"%0AWith Regards%0A"+initialState.name + "%0A"+ initialState.email
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=aaryansharma.0701@gmail.com&su=${initialState.subject}&body=${message}`); event.preventDefault();
    }
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({
            ...initialState,
            [name]: value
        });
    }
    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: { ...initialState.touched, [field]: true }
        });
    }

    const validate = (name, email, subject, message) => {
        const errors = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        if (initialState.touched.name && name.length < 3)
            errors.name = 'Name should be of minimum length of 3 characters';
        else if (initialState.touched.name && name.length > 30)
            errors.name = 'Name should not be greater than 30 characters';
        if (initialState.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Enter a valid email';
        if (initialState.touched.subject && subject.length < 10)
            errors.subject = 'Subject should contain a minimum of 10 characters';
        if (initialState.touched.subject && subject.length > 30)
            errors.subject = 'Subject should contain a maximum of 30 characters';
        if (initialState.touched.subject && message.length < 50)
            errors.message = 'Description should contain a minimum of 50 characters';

        return errors;

    }
    const errors = validate(initialState.name, initialState.email, initialState.subject, initialState.message);

    return (
        <>
        
        <div className="contact">
        <Jumbotron>
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="feature-heading mt-4">Contact Us</h2>
                    <hr className="feature-line" />
                    <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium.</p>
                </div>
            </div>
            </Jumbotron>
            <div>
        <iframe style={{border:0,width:"100%",height:"350px",paddingBottom:"2%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.259701444513!2d76.7847875149764!3d30.767289781625106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1615879926718!5m2!1sen!2sin" ></iframe>
            </div>
            <div className="container-fluid row row-content">

                <div className="col-12 col-md-4 offset-md-2">

                    <a href="http://maps.google.com/?q=Punjab Engineering College, Sector-12" target="_blank" rel="noreferrer noopener"><i class="fa fa-map-marker fa-2x info" aria-hidden="true"></i></a><div className="text"><p><strong>Location:</strong><br />Punjab Engineering College, Sector-12,<br />Chandigarh, 160012</p></div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=myHelp@gmail.com" target="_blank" rel="noreferrer noopener"> <i className="fa fa-envelope fa-2x info" target="_blank"></i></a><div className="text"><p><strong>Email:</strong><br />myHelp@gmail.com</p></div>
                    <a href="tel:+1722753071" target="_blank" rel="noreferrer noopener"> <i class="fa fa-phone fa-2x info" aria-hidden="true"></i></a><div className="text"><p><strong>Call:</strong><br />+1722753071</p></div>
                </div>

                <div className="col-12 col-md-5">

                    <Form className="myForm" onSubmit={handleSubmit}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Your Name</Label>
                                    <Input onChange={handleInputChange} type="text" name="name" id="name"
                                        valid={errors.name === ''} invalid={errors.name !== ''}
                                        onBlur={handleBlur('name')} placeholder="Your Name" required />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="email">Your Email</Label>
                                    <Input onChange={handleInputChange} type="email" name="email" id="email"
                                        valid={errors.email === ''} invalid={errors.email !== ''}
                                        onBlur={handleBlur('email')} placeholder="Your Email" required />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup row>
                            <Col>
                                <Label for="subject">Subject</Label>
                                <Input onChange={handleInputChange} type="text" name="subject" id="subject"
                                    valid={errors.subject === ''} invalid={errors.subject !== ''}
                                    onBlur={handleBlur('subject')} placeholder="Subject" required />
                                <FormFeedback>{errors.subject}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col>
                                <Label for="message">Message</Label>
                                <Input onChange={handleInputChange} onBlur={handleBlur('message')}
                                    valid={errors.message === ''} invalid={errors.message !== ''}
                                    type="textarea" name="message" id="message" placeholder="Message"
                                    rows="3" required />
                                <FormFeedback>{errors.message}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{ size: 10 }}>
                                <Button type="submit" color="primary">
                                    Send Message
                                    </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        </>

    );

}
export default Contact;

