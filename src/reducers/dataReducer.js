import { 
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  errorMessage: '',
  data: []
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...action.data],
        errorMessage: ''
      };

    case GET_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      };

    default:
      return state;
  }
}