import { FETCH_QUESTIONS_FAILURE, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_RESET } from "../actions/questionsAction";

const initialState = {
    loading: false,
    questions: [],
    hasMore: true,
    error: '',
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_RESET:
            return {
                ...state,
                loading: false,
                questions: []
            };

        case FETCH_QUESTIONS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: [...state.questions, ...action.payload.questions],
                hasMore: action.payload.hasMore,
            };
        case FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default questionReducer;
