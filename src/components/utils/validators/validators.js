export const required = value => {
    if (value) return undefined;
    return "Обязательно к заполнению"
}
export const maxLengthCreator = maxLength => value  => {
    if(value.length > maxLength) return `Максимальная длина ${maxLength} символов`;
    return undefined;
}
export const minLengthCreator = minLength => value => {
    if(value.length < minLength) return `Минимальная длина ${minLength} символа`;
    return undefined;
}