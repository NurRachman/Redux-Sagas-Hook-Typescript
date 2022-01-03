import {DataUser} from '../models/userModel';
import {getUserTypes} from '../actionTypes/userActionTypes';

export interface GetUserState {
  loading: boolean;
  data: DataUser[];
  message: string | null;
}

export interface GetUser {
  loading: boolean;
}
export interface GetUserSuccess {
  data: DataUser[];
}
export interface GetUserFailed {
  message: string | null;
}

export interface FetchGetUser {
  type: typeof getUserTypes.GET_USER;
}

export interface FetchGetUserSuccess {
  type: typeof getUserTypes.GET_USER_SUCCESS;
  payload: GetUserSuccess;
}
export interface FetchGetUserFailed {
  type: typeof getUserTypes.GET_USER_FAILED;
  payload: GetUserFailed;
}

export type GetUserActions =
  | FetchGetUser
  | FetchGetUserSuccess
  | FetchGetUserFailed;
