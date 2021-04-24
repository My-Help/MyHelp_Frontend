import * as ActionTypes from './ActionTypes'

export const Bookings = (state = {
    isLoading: true,
    errMess: null,
    bookings: []
}, action) => {
    switch (action.type) {
        case ActionTypes.Booking_SUCCESS:
            return { ...state, isLoading: false, errMess: null, bookings: action.payload };

        case ActionTypes.Booking_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, bookings: [] };

        case ActionTypes.Booking_LOADING:
            return { ...state, isLoading: true, errMess: [], bookings: [] };

        case ActionTypes.ADD_Booking:
            var booking = action.payload;
            return { ...state, bookings: state.bookings.concat(booking) };  

        default:
            return state;
    }
}