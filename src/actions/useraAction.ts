import {getUserTypes} from '../actionTypes/userActionTypes';
import {
  GetUserFailed,
  GetUserSuccess,
  FetchGetUser,
  FetchGetUserFailed,
  FetchGetUserSuccess,
} from '../types/userType';

export const fetchGetUser = (): FetchGetUser => ({
  type: getUserTypes.GET_USER,
});
export const fetchGetUserSuccess = (
  payload: GetUserSuccess,
): FetchGetUserSuccess => ({
  payload,
  type: getUserTypes.GET_USER_SUCCESS,
});
export const fetchGetUserFailed = (
  payload: GetUserFailed,
): FetchGetUserFailed => ({
  payload,
  type: getUserTypes.GET_USER_FAILED,
});
