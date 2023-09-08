const ADD_POST_HOOK = 'ADD-POST-HOOK';
const ADD_POST_FORMIK = 'ADD-POST-FORMIK';

let initialState = {
    hookForms: [],
    formikForms: []
}

const testPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_HOOK:
            return {
                ...state,
                hookForms: {...action.payload}};
        case ADD_POST_FORMIK:
            return {
                ...state,
                formikForms: {...action.payload}
            }
        default:
            return state;
    }
}
export const addHookFieldToState = (data) => ({type: ADD_POST_HOOK, payload: {data}})
export const addFormikFieldToState = (data) => ({type: ADD_POST_FORMIK, payload: {data}})

export default testPageReducer;