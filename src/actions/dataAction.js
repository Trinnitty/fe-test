import { 
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../constants/actionTypes';

export function getDataRequest() {
  return {
      type: GET_DATA_REQUEST
  };
}

export function getDataSuccess(data) {
  return {
      type: GET_DATA_SUCCESS,
      data: data
  };
}

export function getDataFailure(error) {
  return {
      type: GET_DATA_FAILURE,
      error: error
  };
}


