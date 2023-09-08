
import React from "react";
import {Field, reduxForm} from "redux-form";
import styled from "styled-components";
import { maxLengthCreator, minLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../../common/FormsControl/FormsControl";

const Fieldset = styled.form`
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
`
const Btn = styled.button`
    color: #fff;
    background: #3f413f;
    padding: 6px 12px;
    border-radius: 8px;
`
const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const AddPostForm = (props) => {
    const formSubmit = e => {
        e.preventDefault();
        props.handleSubmit();
    }
    return (
        <Fieldset onSubmit={e => formSubmit(e)}>
            <Field component={Input} 
                name='newChatMessage'
                validate={[required, maxLength10, minLength2]}
                placeholder='Enter text...'
            />
            <Btn>Отправить</Btn>
        </Fieldset>
    )
}
export const AddPostFormRedux = reduxForm({form: 'chat'})(AddPostForm)