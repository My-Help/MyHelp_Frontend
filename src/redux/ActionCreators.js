import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseURL';
//Customer
export const customerLoading = () => ({
    type: ActionTypes.CUSTOMER_LOADING
});

export const customerFailed = (errmess) => ({
    type: ActionTypes.CUSTOMER_FAILED,
    payload: errmess
});

export const customerSuccess = (customer) => ({
    type: ActionTypes.CUSTOMER_SUCCESS,
    payload: customer
});

export const addCustomer = (customer) => ({
    type: ActionTypes.ADD_CUSTOMER,
    payload: customer
});

export const postCustomer = (customer) => (dispatch) => {

    const newCustomer = {
        Customer_Username:customer.Username,
        Name:customer.Name,
        mobileNo:customer.MobileNo,
        Gender:customer.Gender,
        City:customer.City,
        Address:customer.Address,
        email:customer.Email
    }
    console.log('Customer: ', newCustomer);

    fetch(baseUrl + 'customers', {
        method: 'POST',
        body: JSON.stringify(newCustomer),
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
        .then(response => { alert("Customer Info added Successfully!!");})
        .catch(error => {
            console.log('Post Customer ', error.message);
            alert('Customer Info could not be added\nError: ' + error.message);
        })
}

export const fetchCustomers = () => (dispatch) => {
    dispatch(customerLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'customers', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
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
        .then(customers => dispatch(customerSuccess(customers)))
        .catch(error => dispatch(customerFailed(error.message)));
}

export const updateCustomerInfo = (customer) => (dispatch) => {
    const newCustomer = {
        Customer_Username:customer.Username,
        Name:customer.Name,
        mobileNo:customer.MobileNo,
        Gender:customer.Gender,
        City:customer.City,
        Address:customer.Address,
        email:customer.Email
    }
    console.log('newCustomer: ', newCustomer);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'customers/' + customer.id, {
        method: 'PUT',
        body: JSON.stringify(newCustomer),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("Customer Info Updated!"); dispatch(fetchCustomers()); })
        .catch(error => {
            console.log('Update CustomerInfo ', error.message);
            alert('Customer could not be updated\nError: ' + error.message);
        })
}


//Servie_Provider
export const serviceProviderLoading = () => ({
    type: ActionTypes.ServiceProvider_LOADING
});

export const serviceProviderFailed = (errmess) => ({
    type: ActionTypes.ServiceProvider_FAILED,
    payload: errmess
});

export const serviceProviderSuccess = (serviceProvider) => ({
    type: ActionTypes.ServiceProvider_SUCCESS,
    payload: serviceProvider
});

export const addServiceProvider = (serviceProvider) => ({
    type: ActionTypes.ADD_ServiceProvider,
    payload: serviceProvider
});

export const postServiceProvider = (serviceProvider) => (dispatch) => {

    const newServiceProvider = {
        ServiceProvider_Username:serviceProvider.Username,
        Name:serviceProvider.Name,
        MobileNo:serviceProvider.MobileNo,
        Price:serviceProvider.Price,
        Gender:serviceProvider.Gender,
        City:serviceProvider.City,
        email:serviceProvider.Email,
        Occupation:serviceProvider.Occupation,
        Description:serviceProvider.Description,
    }
    console.log(newServiceProvider)
    console.log('ServiceProvider: ', newServiceProvider);

    return fetch(baseUrl + 'serviceProviders', {
        method: 'POST',
        body: JSON.stringify(newServiceProvider),
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
        .then(response => { alert("ServiceProvider Info added Successfully!!"); dispatch(addServiceProvider(response)); dispatch(fetchServiceProviders()); })
        .catch(error => {
            console.log('Post Service ', error.message);
            alert('ServiceProvider Info could not be added\nError: ' + error.message);
        })
}

export const fetchServiceProviders = () => (dispatch) => {
    dispatch(serviceProviderLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'serviceProviders', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
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
        .then(serviceProviders => dispatch(serviceProviderSuccess(serviceProviders)))
        .catch(error => dispatch(serviceProviderFailed(error.message)));
}

export const updateServiceProviderInfo = (serviceProvider) => (dispatch) => {
    const newServiceProvider = {
        ServiceProvider_Username:serviceProvider.Username,
        Name:serviceProvider.Name,
        MobileNo:serviceProvider.MobileNo,
        Price:serviceProvider.Price,
        Gender:serviceProvider.Gender,
        City:serviceProvider.City,
        email:serviceProvider.Email,
        Occupation:serviceProvider.Occupation,
        Description:serviceProvider.Description,
    }
    console.log('newServiceProvider: ', newServiceProvider);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'serviceProviders/' + serviceProvider.id, {
        method: 'PUT',
        body: JSON.stringify(newServiceProvider),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert("Service Provider Info Updated!"); dispatch(fetchServiceProviders()); })
        .catch(error => {
            console.log('Update Service Provider Info ', error.message);
            alert('Service Provider could not be updated\nError: ' + error.message);
        })
}

//Booking
export const bookingLoading = () => ({
    type: ActionTypes.Booking_LOADING
});

export const bookingFailed = (errmess) => ({
    type: ActionTypes.Booking_FAILED,
    payload: errmess
});

export const bookingSuccess = (booking) => ({
    type: ActionTypes.Booking_SUCCESS,
    payload: booking
});

export const addbooking = (booking) => ({
    type: ActionTypes.ADD_Booking,
    payload: booking
});

export const postBooking = (booking) => (dispatch) => {

    const newBooking = {
        Customers_Username:booking.Customer_Username,
        ServiceProviders_Username:booking.ServiceProvider_Username,
        DateTime:booking.Date,
        TimeSlot:booking.Time,
        ProblemDescription:booking.Description
    }
    console.log('Booking: ', newBooking);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'booking', {
        method: 'POST',
        body: JSON.stringify(newBooking),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
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
        .then(response => { alert("Booking Successfully!!"); dispatch(addbooking(response)); dispatch(fetchbookings()); })
        .catch(error => {
            console.log('Booking ', error.message);
            alert('Booking could not be added\nError: ' + error.message);
        })
}

export const fetchbookings = () => (dispatch) => {
    dispatch(bookingLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'booking', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
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
        .then(serviceProviders => dispatch(bookingSuccess(serviceProviders)))
        .catch(error => dispatch(bookingFailed(error.message)));
}

export const updateBooking = (booking) => (dispatch) => {
    const newBooking = {
        Customers_Username:booking.Customer_Username,
        ServiceProviders_Username:booking.ServiceProvider_Username,
        DateTime:booking.Date,
        TimeSlot:booking.Time,
        ProblemDescription:booking.Description,
        Completed:booking.Completed,
        Feedback:booking.Feedback
    }
    console.log('newBooking: ', newBooking);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'booking/' + booking.id, {
        method: 'PUT',
        body: JSON.stringify(newBooking),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { 
            if(booking.Completed===true){
                alert("Booked Service Completed!"); 
            }
            dispatch(fetchbookings());
             })
        .catch(error => {
            console.log('Update Booking Info ', error.message);
            alert('Booked Service could not be updated\nError: ' + error.message);
        })
}


export const deletebooking = (bookingId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'booking/' + bookingId, {
        method: "DELETE",
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(bookings => { console.log('Booking Deleted', bookings); dispatch(fetchbookings()); })
        .catch(error => dispatch(bookingFailed(error.message)));
};


//Feedback
export const feedbackLoading = () => ({
    type: ActionTypes.Feedback_LOADING
});

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.Feedback_FAILED,
    payload: errmess
});

export const feedbackSuccess = (feedback) => ({
    type: ActionTypes.Feedback_SUCCESS,
    payload: feedback
});

export const addfeedback = (feedback) => ({
    type: ActionTypes.ADD_Feedback,
    payload: feedback
});

export const postFeedback = (feedback) => (dispatch) => {

    const newFeedback = {
        Customers_Username:feedback.Customer_Username,
        ServiceProvider_Username:feedback.ServiceProvider_Username,
        Description:feedback.Description
    }
    console.log('Feedback: ', newFeedback);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'formfeedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
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
        .then(response => { alert("Feedback Info Successfully!!"); dispatch(addfeedback(response)); dispatch(fetchfeedbacks()); })
        .catch(error => {
            console.log('Feedback ', error.message);
            alert('Feedback could not be added\nError: ' + error.message);
        })
}

export const fetchfeedbacks = () => (dispatch) => {
    dispatch(feedbackLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'formfeedback', {
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
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
        .then(serviceProviders => dispatch(feedbackSuccess(serviceProviders)))
        .catch(error => dispatch(feedbackFailed(error.message)));
}

// Login

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token,
        admin: response.admin
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.token);
                localStorage.setItem('creds', JSON.stringify(creds));
                localStorage.setItem('admin', response.admin);

                // Dispatch the success action
                dispatch(fetchCustomers());
                dispatch(fetchServiceProviders());
                dispatch(fetchbookings());
                dispatch(fetchfeedbacks());
                dispatch(receiveLogin(response));
            }
            else {
                var error = new Error('Error ' + response.status);
                error.response = response;
                throw error;
            }
        })
        .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    localStorage.removeItem('admin');
    
    dispatch(customerFailed("Error 401: Unauthorized"));
    dispatch(serviceProviderFailed("Error 401: Unauthorized"));
    dispatch(feedbackFailed("Error 401: Unauthorized"));
    dispatch(bookingFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}