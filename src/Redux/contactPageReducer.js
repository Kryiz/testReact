let initialState = {
    contacts: {
        title: "Мои контакты:",
        adress: "Россия, г. Москва",
        phone: "+7 (123) 456-78-90",
        mail: "Antonkryiz@spacex.com"
    }
}

const contactPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default contactPageReducer;