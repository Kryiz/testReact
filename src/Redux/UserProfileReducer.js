import { UsersAPI } from "../api/api";

const GET_USER_PROFILE = 'GET_USER_PROFILE';

let initialState = {
    user: null
}

const UserProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }

}
export const getUserProfile = (user) => ({ type: GET_USER_PROFILE, user })

export const getUserThunk = (userId) => {
    return (dispatch) => {
        UsersAPI.getUser(userId)
        .then(state => {
            dispatch(getUserProfile(state.data))
        })
    }
}

export default UserProfileReducer;