import chatPageReducer, { addMessage, deleteMessage } from "./chatPageReducer"

let state = {
    messages: [
        { id: 1, name: "A", message: 'Hello' },
        { id: 2, name: "Б", message: 'my' },
        { id: 3, name: "В", message: 'name' },
        { id: 4, name: "Г", message: 'is' },
        { id: 5, name: "Д", message: 'Mario' },
    ],
    newInputField: '',
}
it('new message should be added', () => {
    let action = addMessage('test');
    let newState = chatPageReducer(state, action);
    expect(newState.messages.length).toBe(6);
})
it('new message text are correct', () => {
    let action = addMessage('test');
    let newState = chatPageReducer(state, action);
    expect(newState.messages[5].message).toBe('test');
})
it('after deleting length of messages should be decrease', () => {
    let action = deleteMessage(1);
    let newState = chatPageReducer(state, action);
    expect(newState.messages.length).toBe(4);
})
it('after deleting length of messages shouldn"t be decrease if id incorrect', () => {
    let action = deleteMessage(1000);
    let newState = chatPageReducer(state, action);
    expect(newState.messages.length).toBe(5);
})