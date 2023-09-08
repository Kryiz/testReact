import testPageReducer from "../Redux/testPageReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_VALUE = 'UPDATE-INPUT-VALUE';

let store = {
    _state: {
        chatPage: {
            messages: [
                { id: 1, name: "A", message: 'Hello' },
                { id: 2, name: "Б", message: 'my' },
                { id: 3, name: "В", message: 'name' },
                { id: 4, name: "Г", message: 'is' },
                { id: 5, name: "Д", message: 'Mario' },
            ],
            newInputField: '',
        },
        contactsPage: {
            contacts: {
                adress: "Россия, г. Москва",
                phone: "+7 (123) 456-78-90",
                mail: "Antonkryiz@spacex.com"
            }
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        testPageReducer(this._state.chatPage, action);
    }
}
export const addFieldToStateActionCreate = (field) => ({type: ADD_POST, text: field})
export const updateInputValueActionCreator = (text) => ({type: UPDATE_INPUT_VALUE, field: text})
export default store;

window.state = store;