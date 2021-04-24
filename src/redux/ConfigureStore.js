import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Customers} from './Customers';
import {ServiceProviders} from './ServiceProviders';
import {Bookings} from './bookings';
import {Feedbacks} from './feedback';
import { Auth } from './auth';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            customers: Customers,
            serviceProviders: ServiceProviders,
            bookings: Bookings,
            feedbacks: Feedbacks,
            auth: Auth,
        }, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
        applyMiddleware(thunk)
    );

    return store;
}