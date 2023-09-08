import axios from "axios";

const instanceReqres = axios.create({
    baseURL: 'https://reqres.in/api/users/',
})
const instanceSjs = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export const UsersAPI = {
    async getUsers(currentPage) {
        return await instanceReqres.get(`?page=${currentPage}`)
            .then(response => {
                return response.data
            })
    },
    async getUser(userId) {
        return await instanceReqres.get(userId)
            .then(response => {
                return response.data
            })
    }
}
export const AuthAPI = {
    async authMe() {
        return await instanceSjs.get('auth/me')
    },
    async authLogin(email, password) {
        return await instanceSjs.post('auth/login', { email, password })
    },
    async authLogout(email, password) {
        return await instanceSjs.delete('auth/login')
    }
}