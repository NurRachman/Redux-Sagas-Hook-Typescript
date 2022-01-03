import {getUserTypes} from '../actionTypes/userActionTypes';
import {GetUserActions, GetUserState} from '../types/userType';

const initialState: GetUserState = {
  loading: false,
  data: [],
  message: '',
};

export default (state = initialState, action: GetUserActions) => {
  switch (action.type) {
    case getUserTypes.GET_USER:
      return {
        ...state,
        loading: true,
      };
    case getUserTypes.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case getUserTypes.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };
    default:
      return {
        ...state,
      };
  }
};
