import { AuthAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};
const HeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            debugger;
            return {
                ...state,
                ...action.payload,
                isAuth: true,
            };
        default:
            return state;
    }
};
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await AuthAPI.authMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
export const authLoginThunk =
    (email, password, rememeberMe) => async (dispatch) => {
        const response = await AuthAPI.authLogin(email, password, rememeberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    };
export const authLogoutThunk = () => async (dispatch) => {
    const response = await AuthAPI.authLogout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default HeaderReducer;
