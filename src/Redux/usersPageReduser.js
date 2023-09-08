import { UsersAPI } from "../api/api";

const SET_USERS = "GET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const IS_FETCHING = "IS_FETCHING";

let initialState = {
    users: [],
    currentPage: 1,
    totalPages: null,
    isFetching: true,
};
const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                totalPages: action.data.total_pages,
                users: action.data.data.map((user) => {
                    return {
                        ...user,
                        follow: false,
                    };
                }),
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            };
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, follow: true };
                    }
                    return user;
                }),
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, follow: false };
                    }
                    return user;
                }),
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};
export const setUsers = (data) => ({ type: SET_USERS, data });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const toggleIsFetching = (isFetching) => ({
    type: IS_FETCHING,
    isFetching,
});

export const getUsersThunk = (currentPage) => {
    return async (dispatch) => {
        const state = await UsersAPI.getUsers(currentPage);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(state));
    };
};

export default usersPageReducer;
