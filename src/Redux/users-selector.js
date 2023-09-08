import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}
// Пример реселетора
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users.filter(user => true)
})
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getTotalPages = (state) => {
    return state.usersPage.totalPages;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getIsAuth = (state) => {
    return state.headerPage.isAuth;
}