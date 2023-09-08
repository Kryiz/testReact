import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControl/FormsControl";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { authLoginThunk } from "../../../Redux/HeaderReducer";

const Auth = (props) => {
    // const login = process.env.REACT_APP_LOGIN;
    // const emailValue = process.env.REACT_APP_MY_MAIL;
    // const passwordValue = process.env.REACT_APP_MY_PASSWORD;
    const maxLenght30 = maxLengthCreator(30);
    const minLength2 = minLengthCreator(2);
    return (
        <Form onSubmit={props.handleSubmit}>
            <InputFolder>
                <Label>Почта</Label>
                <Field component={Input}
                    type="email"
                    name="email"
                    autoComplete="username"
                    validate={[required, maxLenght30, minLength2]}
                    placeholder="Ваша почта"
                />
            </InputFolder>
            <InputFolder>
                <Label>Пароль</Label>
                <Field component={Input}
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    validate={[required, maxLenght30, minLength2]}
                    placeholder="Пароль"
                />
            </InputFolder>
            <BtnFolder>
                <Btn type="submit">Отправить</Btn>
            </BtnFolder>
        </Form>
    )
}
const AuthRedux = reduxForm({ form: 'auth' })(Auth);

const Login = props => {
    const onSubmit = formData => {
        props.authLoginThunk(formData.email, formData.password)
    }
    return (
        <>
            <Title>Авторизация</Title>
            <AuthRedux onSubmit={onSubmit} />
        </>
    )
}
export default connect(null, {authLoginThunk})(Login);

const Title = styled.h3`
    font-size: 1.25rem;
    text-align: center;
`
const Form = styled.form`
    padding: 1.25rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
const Label = styled.div`
    text-align: left;
    color: #727272;
    padding-bottom: .5rem;
`
const InputFolder = styled.div`
    text-align: center;
`
const BtnFolder = styled.div`
    text-align: center;
    margin-top: .75rem;
`
const Btn = styled.button`
    color: #FFFFFF;
    background-color: #3f413f;
    padding: .5rem 1rem;
    border-radius: .5rem;
`