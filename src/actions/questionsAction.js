import { fetchQuestionsFromApi } from '../api/QuestionsApi';

// Action Types
export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';
export const FETCH_QUESTIONS_RESET = 'FETCH_QUESTIONS_RESET';


// Action Creators
export const fetchQuestionsRequest = () => ({
    type: FETCH_QUESTIONS_REQUEST,
});

export const fetchQuestionsReset = () => ({
    type: FETCH_QUESTIONS_RESET,
});
export const fetchQuestionsSuccess = (questions, hasMore) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: { questions, hasMore },
});

export const fetchQuestionsFailure = (error) => ({
    type: FETCH_QUESTIONS_FAILURE,
    payload: error,
});

// Fetch Questions with Pagination
export const fetchQuestions = (tag, page = 1) => {
    const perPage = 10; // Number of questions per page

    return async (dispatch) => {
        try {
            dispatch(fetchQuestionsRequest());
            const response = await fetchQuestionsFromApi(tag, page, perPage)
            const questions = response.data.items;
            const hasMore = questions.length === perPage;
            dispatch(fetchQuestionsSuccess(questions, hasMore));
        } catch (error) {
            dispatch(fetchQuestionsFailure(error.message));
        }
    };
};
