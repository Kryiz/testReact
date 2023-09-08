const SET_STATUS = 'SET_STATUS';

let initialState = {
    status: 'Установите ваш статус',
}

const aboutPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: 
            return {
                status: action.payload
            }
        default: return state;
    }
}
export const addStatus = (payload) => ({type: SET_STATUS, payload})
export default aboutPageReducer;