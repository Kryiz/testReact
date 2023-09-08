const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";

let initialState = {
    messages: [
        { id: 1, name: "A", message: "Hello" },
        { id: 2, name: "Б", message: "my" },
        { id: 3, name: "В", message: "name" },
        { id: 4, name: "Г", message: "is" },
        { id: 5, name: "Д", message: "Mario" },
    ],
    newInputField: "",
};
const chatPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = {
                id: state.messages.length + 1,
                name: "K",
                message: action.newChatMessage,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        case DELETE_POST:
            return {
                ...state,
                messages: state.messages.filter(message => message.id !== action.messageId)
            };
        default:
            return state;
    }
};
export const addMessage = (newChatMessage) => ({
    type: ADD_POST,
    newChatMessage,
});
export const deleteMessage = (messageId) => ({ type: DELETE_POST, messageId });

export default chatPageReducer;
