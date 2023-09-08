import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";
import Messages from "./Messages/Messages";
import { AddPostFormRedux } from "./AddPostForm/AddPostForm";

const Main = styled.section`
    padding: 50px 0 70px;
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`
export default function Chat(props) {
    const AddNewMessage = (values) => {
        props.addMessage(values.newChatMessage)
    }
    return (
        <Main>
            <Container>
                <Title>
                    Сообщения. "Redux-form"
                </Title>
                <AddPostFormRedux onSubmit={AddNewMessage} />
                <Messages messages={ props.messages } />
            </Container>
        </Main>
    )
}