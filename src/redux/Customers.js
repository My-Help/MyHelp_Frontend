import * as ActionTypes from './ActionTypes'

export const Customers = (state = {
    isLoading: true,
    errMess: null,
    customers: []
}, action) => {
    switch (action.type) {
        case ActionTypes.CUSTOMER_SUCCESS:
            return { ...state, isLoading: false, errMess: null, customers: action.payload };

        case ActionTypes.CUSTOMER_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, customers: [] };

        case ActionTypes.CUSTOMER_LOADING:
            return { ...state, isLoading: true, errMess: [], customers: [] };

        case ActionTypes.ADD_CUSTOMER:
            var customer = action.payload;
            return { ...state, customers: state.customers.concat(customer) };
    

        default:
            return state;
    }
}