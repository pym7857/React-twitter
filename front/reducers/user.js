/* redux state */
const dummyUser = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    signUpData: {},
};

export const initialState = {
    isLoggedIn: false,
    user: null,
};

/* Action의 이름 */
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

/* 실제 Action */
export const signUpAction = (data)  => {
    return {
        type: SIGN_UP,
        data: data,
    };
};
export const loginAction = {
    type: LOG_IN,
};
export const logoutAction = {
    type: LOG_OUT,
};

/* Reducer */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP: {
            return {
                ...state,
                signUpData: action.data,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
};

export default reducer;