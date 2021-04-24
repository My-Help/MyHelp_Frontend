import * as ActionTypes from './ActionTypes'

export const ServiceProviders = (state = {
    isLoading: true,
    errMess: null,
    serviceproviders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ServiceProvider_SUCCESS:
            return { ...state, isLoading: false, errMess: null, serviceproviders: action.payload };

        case ActionTypes.ServiceProvider_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, serviceproviders: [] };

        case ActionTypes.ServiceProvider_LOADING:
            return { ...state, isLoading: true, errMess: [], serviceproviders: [] };

        case ActionTypes.ADD_ServiceProvider:
            var serviceProvider = action.payload;
            return { ...state, serviceproviders: state.serviceproviders.concat(serviceProvider) };

        default:
            return state;
    }
}