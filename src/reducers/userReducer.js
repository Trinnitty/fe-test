import { 
  GET_DATAUSER_REQUEST,
  GET_DATAUSER_SUCCESS,
  GET_DATAUSER_FAILURE
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  errorMessage: '',
  clickUser: null,
  dataUsers: []
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATAUSER_REQUEST:
      return {
        ...state,
        isFetching: true,
        errorMessage: ''
      };

    case GET_DATAUSER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataUsers: action.dataUsers,
        errorMessage: ''
      };

    case GET_DATAUSER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.error
      };
    
    default:
      return state;
  }
}