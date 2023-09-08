import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";

export default function Error () {
    return (
        <Main>
            <Container>
                <Title>
                    Такой страницы не существует.
                </Title>
            </Container>

        </Main>
    )
}
const Main = styled.section`
    padding: 50px 0 70px;
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
`