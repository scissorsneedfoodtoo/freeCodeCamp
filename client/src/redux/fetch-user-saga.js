import { call, put, takeEvery } from 'redux-saga/effects';
import { getSessionUser, getUserProfile } from '../utils/ajax';
import {
  fetchProfileForUserComplete,
  fetchProfileForUserError,
  fetchUserComplete,
  fetchUserError
} from './actions';

function* fetchSessionUser() {
  try {
    const { data: user } = yield call(getSessionUser);

    yield put(fetchUserComplete({ user }));
  } catch (e) {
    console.log('failed to fetch user', e);
    yield put(fetchUserError(e));
  }
}

function* fetchOtherUser({ payload: maybeUser = '' }) {
  try {
    const maybeUserLC = maybeUser.toLowerCase();

    const { data: otherUser } = yield call(getUserProfile, maybeUserLC);
    yield put(fetchProfileForUserComplete({ user: otherUser }));
  } catch (e) {
    yield put(fetchProfileForUserError(e));
  }
}

export function createFetchUserSaga(types) {
  return [
    takeEvery(types.fetchUser, fetchSessionUser),
    takeEvery(types.fetchProfileForUser, fetchOtherUser)
  ];
}
