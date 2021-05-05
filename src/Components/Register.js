import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, FormFeedback,Card, CardBody, CardHeader,Jumbotron } from 'reactstrap';
import {baseUrl} from '../shared/baseURL';
function SignupForm(props) {

    const [initialState, setState] = useState({
        Username: '',
        customer_or_service_provider:'',
        password: '',
        repassword :'',
        Name:'',
        MobileNo:'',
        Gender:'',
        City:'',
        Address:'',
        Email:'',
        Price:'',
        Occupation:'',
        Description:'',
        touched: {
            Username: false,
            password: false,
            repassword :false,
            Name:false,
            MobileNo:false,
            City:false,
            Address:false,
            Email:false,
            Description:false,
        }
    })


    const handleSubmitClick = (event) => {
       

        let customer_or_service_provider=false
        if (initialState.customer_or_service_provider=="true"){
            customer_or_service_provider=true
        }

        let new_user = {
            username:initialState.Username,
            password:initialState.password,
            service_provider:customer_or_service_provider,
            admin:customer_or_service_provider
        }

        fetch(baseUrl + 'users/signup', {
            method: 'POST',
            body: JSON.stringify(new_user),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response => { alert("Registeration Successfully!!");})
            .catch(error => {
               
                alert(' Could not be Registered\nError: ' + error.message);
            })

            if(customer_or_service_provider===false){
                var newCustomer = {
                    Username:initialState.Username,
                    Name:initialState.Name,
                    MobileNo:initialState.MobileNo,
                    Gender:initialState.Gender,
                    City:initialState.City,
                    Address:initialState.Address,
                    Email:initialState.Email
                }
                props.postCustomer(newCustomer);
            }

            else if(customer_or_service_provider===true){
                const newServiceProvider = {
                    Username:initialState.Username,
                    Name:initialState.Name,
                    MobileNo:initialState.MobileNo,
                    Price:initialState.Price,
                    Gender:initialState.Gender,
                    City:initialState.City,
                    Email:initialState.Email,
                    Occupation:initialState.Occupation,
                    Description:initialState.Description,
                }
                
                props.postServiceProvider(newServiceProvider);
            }
            event.preventDefault();

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

    const validate = (Username, password, repassword,Name,MobileNo,Email,City) => {
        const errors = {
            Username: '',
            password: '',
            repassword :'',
            Name:'',
            MobileNo:'',
            Email:'',
            City:'',

        }
        if (initialState.touched.Name && Name.length < 3)
            errors.Name = 'Name should be of minimum length of 3 characters';
        if (initialState.touched.Name && Name.length > 30)
            errors.Name = 'Name should not be greater than 30 characters';
        if (initialState.touched.Username && Username.length < 3)
            errors.Username = 'Username should be of minimum length of 3 characters';
        if (initialState.touched.Username && Username.length > 30)
            errors.Username = 'Username should not be greater than 30 characters';
        if (initialState.touched.City && City.length < 2)
            errors.City = 'Enter Valid City';
        if (initialState.touched.password && password.length < 5)
            errors.password = 'Password should be of minimum length of 8 characters';
        if (initialState.touched.repassword && repassword.length==0)
            errors.repassword = "Please Confirm Your Password"
        else if (initialState.touched.repassword && repassword!=password)
            errors.repassword = "Password doesn't Match"


        const reg = /^\d{10}$/;
        if (initialState.touched.MobileNo && !reg.test(MobileNo))
            errors.MobileNo = 'Enter a valid Mobile Number';
        if (initialState.touched.Email && Email.split('').filter(x => x === '@').length !== 1)
            errors.Email = 'Enter a valid email';
        return errors;
    }

    const errors = validate(initialState.Username,initialState.password,initialState.repassword,initialState.Name,initialState.MobileNo,initialState.Email,initialState.City);

    const base = (
    <>
    <Card className="mt-5 mb-5">
    <CardHeader className="color mt-3 d-flex justify-content-start " ><h4 className=" mt-2 ">Sign-up</h4></CardHeader>

    {
        <CardBody>
            <Form  onSubmit={handleSubmitClick}>
                <FormGroup>
                    <Label htmlFor="Username" className="d-flex justify-content-start"><h6>Username</h6></Label>
                    <Input required type="text" id="Username" name="Username" value={initialState.Username}
                        onChange={handleInputChange} valid={errors.Username === ''} invalid={errors.Username !== ''} onBlur={handleBlur('Username')} />
                    <FormFeedback>{errors.Username}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="customer_or_service_provider">Role</Label>
                    <Input required type="select" name="customer_or_service_provider" id="customer_or_service_provider" value={initialState.customer_or_service_provider} className="form-control"
                        onChange={handleInputChange}>
                        <option defaultValue>Select</option>
                        <option value="false">Customer</option>
                        <option value="true">Service Provider</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" className="d-flex justify-content-start"><h6>Password</h6></Label>
                    <Input required type="password" id="password" name="password" value={initialState.password}
                        onChange={handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={handleBlur('password')}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="repassword" className="d-flex justify-content-start"><h6>Confirm Password</h6></Label>
                    <Input required type="password" id="repassword" name="repassword" value={initialState.repassword}
                        onChange={handleInputChange} valid={errors.repassword === ''} invalid={errors.repassword !== ''} onBlur={handleBlur('repassword')}
                    />
                    <FormFeedback>{errors.repassword}</FormFeedback>
                </FormGroup>

                <button type="submit" value="submit" className="color btn btn-primary btn-md btn-block mt-2" ><span className="fa fa-sign-in-alt fa-lg"></span>Sign-up</button>
            </Form>
        </CardBody>}
</Card>
</>
);

if(initialState.customer_or_service_provider=="false"){
    return(
        <>
        <Jumbotron className="demo-bg" style={{backgroundSize:"70%",paddingTop:"10%",paddingBottom:"11%",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>
                <h1 className="lead"  style={{fontSize:"280%",fontWeight:"bolder"}}>FILL INFORMATION</h1>

</Jumbotron>
        <div className="row container-fluid">
            <div className="col-7"> 
            {base}
            </div>
            <div className="col-5" >
            <Card className=" mt-5 mb-5 ">
                    <CardHeader className="color mt-3 d-flex justify-content-start ml-3 mr-3 " ><h4 className=" mt-2 " style={{fontSize:"100%"}}>Customer Information</h4></CardHeader>

                    {
                        <CardBody>
                            <Form >
                                <FormGroup>
                                    <Label htmlFor="Name" className="d-flex justify-content-start"><h6>Name</h6></Label>
                                    <Input required type="text" id="Name" name="Name" value={initialState.Name}
                                        onChange={handleInputChange} valid={errors.Name === ''} invalid={errors.Name !== ''} onBlur={handleBlur('Name')} />
                                    <FormFeedback>{errors.Name}</FormFeedback>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label htmlfor="Gender">Gender</Label>
                                    <Input required type="select" name="Gender" id="Gender" value={initialState.Gender} className="form-control"
                                        onChange={handleInputChange} >
                                        <option defaultValue>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlfor="MobileNo">Mobile No.</Label>
                                    <Input required type="text" name="MobileNo" id="MobileNo" value={initialState.MobileNo} onChange={handleInputChange} valid={errors.MobileNo === ''} invalid={errors.MobileNo !== ''} onBlur={handleBlur('MobileNo')} />
                                    <FormFeedback>{errors.MobileNo}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="City" className="d-flex justify-content-start"><h6>City</h6></Label>
                                    <Input required type="text" id="City" name="City" value={initialState.City}
                                        onChange={handleInputChange} valid={errors.City === ''} invalid={errors.City !== ''} onBlur={handleBlur('City')} />
                                    <FormFeedback>{errors.City}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="Address" className="d-flex justify-content-start"><h6>Address</h6></Label>
                                    <Input required type="text" id="Address" name="Address" value={initialState.Address} onChange={handleInputChange} onBlur={handleBlur('Address')} />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlfor="Email">Email</Label>
                                    <Input required type="email" name="Email" id="Email" value={initialState.Email}
                                        onChange={handleInputChange} valid={errors.Email === ''} invalid={errors.Email !== ''} onBlur={handleBlur('Email')} />
                                    <FormFeedback>{errors.Email}</FormFeedback>
                                </FormGroup>
                            </Form>
                        </CardBody>}
                </Card>
            </div>

        </div>
        </>
    );
}

else if(initialState.customer_or_service_provider=="true"){
    return(
        <>
        <Jumbotron className="demo-bg" style={{backgroundSize:"70%",paddingTop:"10%",paddingBottom:"11%",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>
                <h1 className="lead"  style={{fontSize:"280%",fontWeight:"bolder"}}>FILL INFORMATION</h1>

</Jumbotron>
        <div className="row container-fluid">
            <div className="col-7"> 
            {base}
            </div>
            <div className="col-5" >
            <Card className=" mt-5 mb-5 ">
                    <CardHeader className="color mt-3 d-flex justify-content-start ml-3 mr-3 "  ><h4 className=" mt-2 " style={{fontSize:"100%"}}>Service Provider Information</h4></CardHeader>

                    {
                        <CardBody>
                            <Form >
                                <FormGroup>
                                    <Label htmlFor="Name" className="d-flex justify-content-start"><h6>Name</h6></Label>
                                    <Input required type="text" id="Name" name="Name" value={initialState.Name}
                                        onChange={handleInputChange} valid={errors.Name === ''} invalid={errors.Name !== ''} onBlur={handleBlur('Name')} />
                                    <FormFeedback>{errors.Name}</FormFeedback>
                                </FormGroup>
                                
                                <FormGroup>
                                    <Label htmlfor="Gender">Gender</Label>
                                    <Input required type="select" name="Gender" id="Gender" value={initialState.Gender} className="form-control"
                                        onChange={handleInputChange} >
                                        <option defaultValue>Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlfor="MobileNo">Mobile No.</Label>
                                    <Input required type="text" name="MobileNo" id="MobileNo" value={initialState.MobileNo} onChange={handleInputChange} valid={errors.MobileNo === ''} invalid={errors.MobileNo !== ''} onBlur={handleBlur('MobileNo')} />
                                    <FormFeedback>{errors.MobileNo}</FormFeedback>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="City" className="d-flex justify-content-start"><h6>City</h6></Label>
                                    <Input required type="text" id="City" name="City" value={initialState.City}
                                        onChange={handleInputChange} valid={errors.City === ''} invalid={errors.City !== ''} onBlur={handleBlur('City')} />
                                    <FormFeedback>{errors.City}</FormFeedback>
                                </FormGroup>

                                
                                <FormGroup>
                                    <Label htmlfor="Occupation">Occupation</Label>
                                    <Input required type="select" name="Occupation" id="Occupation" value={initialState.Occupation} className="form-control"
                                        onChange={handleInputChange}>
                                        <option defaultValue>Select</option>
                                        <option value="Plumber">Plumber</option>
                                        <option value="Carpenter">Carpenter</option>
                                        <option value="Electrician">Electrician</option>
                                        <option value="AC Service/Repair">AC Service/Repair</option>
                                        <option value="Barber">Barber</option>
                                        <option value="Appliance Repair">Appliance Repair</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlfor="Price">Average Price</Label>
                                    <Input required type="number" name="Price" id="Price" placeholder="Average Price in Rupees" value={initialState.Price}
                                        onChange={handleInputChange}  />
                                </FormGroup>

                                
                                <FormGroup>
                                    <Label htmlfor="Description">Description</Label>
                                    <Input required type="textarea" rows="3" name="Description" id="Description" value={initialState.Description}
                                    onChange={handleInputChange}  />
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlfor="Email">Email</Label>
                                    <Input required type="email" name="Email" id="Email" value={initialState.Email}
                                        onChange={handleInputChange} valid={errors.Email === ''} invalid={errors.Email !== ''} onBlur={handleBlur('Email')} />
                                    <FormFeedback>{errors.Email}</FormFeedback>
                                </FormGroup>
                                
                            </Form>
                        </CardBody>}
                </Card>
            </div>

        </div>
        </>
    );
}

        return (
            <>
            <Jumbotron style={{backgroundImage:`url(https://ps.w.org/ultimate-member/assets/banner-772x250.png?rev=2143172)`,backgroundSize:"70%",paddingTop:"10%",paddingBottom:"11%",backgroundRepeat:"no-repeat",backgroundPosition:"right"}}>
                <h1 style={{fontSize:"300%"}}>SignUp</h1>

</Jumbotron>
            <div className="row container-fluid">
                <div className="col-md-3 offset-1 mt-5 mb-5">
                    <img style={{height:"100%"}} src="./images/register1.png" alt="" />
                </div>
                <div className="offset-2 col-md-6">
                    
                    {base}
                </div>
                </div>
            </>
        )
}

export default SignupForm