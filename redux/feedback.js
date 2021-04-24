import * as ActionTypes from './ActionTypes'

export const Feedbacks = (state = {
    isLoading: true,
    errMess: null,
    feedbacks: []
}, action) => {
    switch (action.type) {
        case ActionTypes.Feedback_SUCCESS:
            return { ...state, isLoading: false, errMess: null, feedbacks: action.payload };

        case ActionTypes.Feedback_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, feedbacks: [] };

        case ActionTypes.Feedback_LOADING:
            return { ...state, isLoading: true, errMess: [], feedbacks: [] };

        case ActionTypes.ADD_Feedback:
            var feedback = action.payload;
            return { ...state, feedbacks: state.feedbacks.concat(feedback) };  

        default:
            return state;
    }
}