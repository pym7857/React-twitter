import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import { 
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    FOLLOW_USER_FAILURE,
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST,
    UNFOLLOW_USER_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE, 
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    EDIT_NICKNAME_FAILURE, 
    EDIT_NICKNAME_REQUEST,
    EDIT_NICKNAME_SUCCESS
} from '../reducers/user';

/**
 * 로그인 3종세트
 */
function loginAPI(loginData) {   // 서버에 요청을 보내는 부분 
    return axios.post('/user/login', loginData, {
        withCredentials: true,
    }); 
}
function* login(action) {
    try {
        const result = yield call(loginAPI, action.data); // 서버에 요청
        yield put({     // put은 dispatch와 동일 
            type: LOG_IN_SUCCESS,
            data: result.data, // axios응답(result)은 응답객체.data안에 들어있다. 
        });
    } catch (e) {
        console.error(e);
        console.dir(e); // 이렇게 하면 에러객체(e)가 콘솔창에 로깅이 된다.
                          //    -> e.response.data에 "사유" 들어있다. 
        yield put({
            type: LOG_IN_FAILURE,
            reason: e.response && e.response.data,
        });
    }
}
function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

/**
 * 회원가입 3종세트
 */
function signUpAPI(signUpData) {
    // 서버에 요청을 보내는 부분 
    return axios.post('/user', signUpData); // 백에서 signUpData를 req.body로 받는다.
}
function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}
function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

/**
 * 로그아웃 3종세트
 */
function logOutAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/logout', {}, {
      withCredentials: true,
    });
}
function* logOut() {
    try {
      yield call(logOutAPI);
      yield put({ // put은 dispatch 동일
        type: LOG_OUT_SUCCESS,
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: LOG_OUT_FAILURE,
        error: e,
      });
    }
}
function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}
  
/**
 * 해당 유저 정보 가져오기 3종세트
 */
function loadUserAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.get(userId ? `/user/${userId}` : '/user/', {   // userId가 있으면 남의정보 가져오고
                                                                // 없으면 내정보 가져오기    
      withCredentials: true,    // 쿠키로 정보가져오기 
    });
}
function* loadUser(action) {
    try {
      const result = yield call(loadUserAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: LOAD_USER_SUCCESS,
        data: result.data,
        isThisMe: !action.data,   // 내정보 가져올때는 LOAD_USER_REQUEST에 id값을 안 넣는다.
                            // 내정보 가져올때(매개변수 없을때) 
                            // -> action.data === false (=값이 없으므로 false)
                            // -> !action.data === true
                            // -> action.isThisMe===true로 LOAD_USER_SUCCESS에 넘어간다.
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: LOAD_USER_FAILURE,
        error: e,
      });
    }
}
function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

/**
 * 팔로우 하기 3종세트
 */
function followAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.post(`/user/${userId}/follow`, {}, {
      withCredentials: true,
    });
}
function* follow(action) {
    try {
      const result = yield call(followAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: FOLLOW_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: FOLLOW_USER_FAILURE,
        error: e,
      });
    }
}
function* watchFollow() {
    yield takeEvery(FOLLOW_USER_REQUEST, follow);
}
  
/**
 * 언팔로우 하기 3종세트
 */
function unfollowAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.delete(`/user/${userId}/follow`, {     // delete는 data:{} 필요 X
      withCredentials: true,
    });
}
function* unfollow(action) {
    try {
      const result = yield call(unfollowAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: UNFOLLOW_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) { 
      console.error(e);
      yield put({
        type: UNFOLLOW_USER_FAILURE,
        error: e,
      });
    }
}
function* watchUnfollow() {
    yield takeEvery(UNFOLLOW_USER_REQUEST, unfollow);
}

/**
 * 내 팔로워들 목록 가져오기 3종세트
 */
/**
 * (Profile.getInitialProps): 프로필 페이지 첫 로딩할때를 생각해보자.
 *   - LOAD_USER_SUCCESS되서 me생기는 부분이 dispatch보다 아래에 있었음.
 *   - 따라서 dispatch에서 전해주는, data부분이 null인 경우, 자기 자신으로 간주합니다.(=꼼수) 
 *      -> 여기서 ${userId || 0}:  userId가 null이라면, 0을 전달하겠다. 
 *      -> 이게 routes로 건너가서 req.params.id 부분이 첫 프로필 로딩때는 0일테니 false로 간주된다.
 *      -> where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0},
 *      -> 그렇게 되면, 자동적으로 || 뒤에있는 (req.user && req.user.id)가 where절에 들어가게 된다.
 */
function loadFollowersAPI(userId, offset = 0, limit = 3) {  // 기본값 설정 
  // 서버에 요청을 보내는 부분
  return axios.get(`/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`, {
    withCredentials: true,
  });
}
function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data, action.offset);  // 처음화면 일때는 action.offset이 존재 X
                                                                              // 더보기 버튼을 눌렀을때는 action.offset이 존재한다.
    yield put({ // put은 dispatch 동일
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadFollowers() {
  yield takeEvery(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

/**
 * 내가 팔로잉 하고있는 사람들 목록 가져오기 3종세트
 */
/**
 * (Profile.getInitialProps): 프로필 페이지 첫 로딩할때를 생각해보자.
 *   - LOAD_USER_SUCCESS되서 me생기는 부분이 dispatch보다 아래에 있었음.
 *   - 따라서 dispatch에서 전해주는, data부분이 null인 경우, 자기 자신으로 간주합니다.(=꼼수) 
 *      -> 여기서 ${userId || 0}:  userId가 null이라면, 0을 전달하겠다. 
 *      -> 이게 routes로 건너가서 req.params.id 부분이 첫 프로필 로딩때는 0일테니 false로 간주된다.
 *      -> where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0},
 *      -> 그렇게 되면, 자동적으로 || 뒤에있는 (req.user && req.user.id)가 where절에 들어가게 된다.
 */
function loadFollowingsAPI(userId, offset = 0, limit = 3) {
  // 서버에 요청을 보내는 부분
  return axios.get(`/user/${userId || 0}/followings?offset=${offset}&limit=${limit}`, {
    withCredentials: true,
  });
}
function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data, action.offset);
    yield put({ // put은 dispatch 동일
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: e,
    });
  }
}
function* watchLoadFollowings() {
  yield takeEvery(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

/**
 * 팔로워 한명 삭제하기 3종세트
 */
function removeFollowerAPI(userId) {
  // 서버에 요청을 보내는 부분
  return axios.delete(`/user/${userId}/follower`, {
    withCredentials: true,
  });
}
function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: e,
    });
  }
}
function* watchRemoveFollower() {
  yield takeEvery(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

/**
 * 닉네임 수정 3종세트
 */
function editNicknameAPI(nickname) {
  // 서버에 요청을 보내는 부분
  return axios.patch('/user/nickname', { nickname }, {  // 부분 수정: patch, 전체 수정: put
    withCredentials: true,
  });
}
function* editNickname(action) {
  try {
    const result = yield call(editNicknameAPI, action.data);
    yield put({ // put은 dispatch 동일
      type: EDIT_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (e) { 
    console.error(e);
    yield put({
      type: EDIT_NICKNAME_FAILURE,
      error: e,
    });
  }
}
function* watchEditNickname() {
  yield takeEvery(EDIT_NICKNAME_REQUEST, editNickname);
}

/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/
function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
        fork(watchEditNickname),
    ]);
}
export default userSaga;