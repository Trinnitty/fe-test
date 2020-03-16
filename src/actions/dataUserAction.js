import { 
  GET_DATAUSER_REQUEST,
  GET_DATAUSER_SUCCESS,
  GET_DATAUSER_FAILURE
} from '../constants/actionTypes';

export function getDataUserRequest() {
  return {
      type: GET_DATAUSER_REQUEST
  };
}

export function getDataUserSuccess(dataUsers) {
  return {
      type: GET_DATAUSER_SUCCESS,
      dataUsers: dataUsers
  };
}

export function getDataUserFailure(error) {
  return {
      type: GET_DATAUSER_FAILURE,
      error: error
  };
}
