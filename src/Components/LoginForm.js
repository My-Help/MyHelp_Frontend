import React, { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback,Card, CardBody, CardHeader } from 'reactstrap';

function LoginForm(props) {

    const [initialState, setState] = useState({
        username: '',
        password: '',

        touched: {
            username: false,
            password: false
        }
    })

    const history = useHistory();
    useEffect(() => {
        if (props.auth.isAuthenticated && props.auth.admin) history.push('/ServiceProvider/Profile');
        else if (props.auth.isAuthenticated && !props.auth.admin) history.push('/Customer/Profile');
    })

    const handleLoginClick = (event) => {
        event.preventDefault();
        props.loginUser({ username: initialState.username, password: initialState.password });
    }

    const handleBlur = (field) => (evt) => {
        setState({
            ...initialState,
            touched: { ...initialState.touched, [field]: true }
        });
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

    const validate = (username, password) => {
        const errors = {
            username: '',
            password: '',
            id: ''
        }
        if (initialState.touched.username && username.length < 3)
            errors.username = 'Username should be of minimum length of 3 characters';
        if (initialState.touched.username && username.length > 30)
            errors.username = 'Username should not be greater than 30 characters';
        if (initialState.touched.password && password.length < 5)
            errors.password = 'Password should be of minimum length of 8 characters';
        return errors;
    }

    const errors = validate(initialState.username, initialState.password);

        return (
            <div className="row container-fluid">
                <div className="col-md-4 offset-1 mt-5 mb-5">
                    <img className="img-fluid" style={{height:"auto"}} src="./images/login.png" alt="" />
                </div>
                <Card className=" col-md-5 offset-1 mt-5 mb-5 ">
                    <CardHeader className="color mt-3 d-flex justify-content-start" ><h4 className=" mt-2 ">Login</h4></CardHeader>

                    {
                        <CardBody>
                            <Form  onSubmit={handleLoginClick}>
                                <FormGroup>
                                    <Label htmlFor="username" className="d-flex justify-content-start"><h6>Username</h6></Label>
                                    <Input required type="text" id="username" name="username" value={initialState.username}
                                        onChange={handleInputChange} valid={errors.username === ''} invalid={errors.username !== ''} onBlur={handleBlur('username')} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password" className="d-flex justify-content-start"><h6>Password</h6></Label>
                                    <Input required type="password" id="password" name="password" value={initialState.password}
                                        onChange={handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={handleBlur('password')}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>
                                <FormGroup check className="d-flex justify-content-start">
                                    <Label check>
                                        <Input type="checkbox" name="remember" className="d-flex justify-content-start"
                                        />
                                        <p>Remember Me</p>
                                    </Label>
                                </FormGroup>
                                <button type="submit" value="submit" className="btn btn-primary btn-md btn-block mt-2 color"  >Login</button>
                            </Form>
                            {props.auth.errMess && <div><p>{props.auth.errMess} Please try again</p></div>}
                        </CardBody>}
                </Card>
            </div>
        )
}

export default withRouter(LoginForm);