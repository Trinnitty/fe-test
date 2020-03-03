import { combineReducers } from "redux";
import { userReducer } from '../reducers/userReducer';
import { dataReducer } from '../reducers/dataReducer';

export const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer
});