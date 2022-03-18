import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from '../actions/actionTypes';

const absences = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        absenceData: action.data,
        isLoading: false
      };
    case FETCH_ERROR:
      return { error: action.err, isLoading: false };
    default:
      return state;
  }
};

export default absences;
