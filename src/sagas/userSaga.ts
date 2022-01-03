import {call, all, put, takeLatest} from 'redux-saga/effects';
import {DataUser} from '../models/userModel';
import {fetchGetUserFailed, fetchGetUserSuccess} from '../actions/useraAction';
import {getUserTypes} from '../actionTypes/userActionTypes';
import axios from 'axios';

const getApi = () =>
  axios.get<DataUser[]>('https://api.github.com/users?since=1&per_page=100');

function* fetchGetUser(): any {
  try {
    const response = yield call(getApi);
    yield put(
      fetchGetUserSuccess({
        data: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchGetUserFailed({
        message: e.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([takeLatest(getUserTypes.GET_USER, fetchGetUser)]);
}

export default userSaga;
