import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";
import reactImg from "../../img/logo.png";

const MainImg = (props) => {
    return (
        <img src={ reactImg} alt={props.alt} style={ImgStyle} />
    )
}
export default function MainPage() {
    return (
        <Container>
            <MainDiv>
                <Title>
                    Главная страница. Тест React.
                </Title>
                <Text>
                    Разнообразный текст, пестрит разнообразием, восхищает оборотами и поражает с первого прочтения.
                </Text>
                <MainImg alt="X" />
            </MainDiv>
        </Container>
    )
}
const MainDiv = styled.section`
    padding: 50px 0 70px;
`
const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`
const Text = styled.p`
    color: rgb(100 85 85);
    margin-bottom: 20px;
`
const ImgStyle = {
    width: "192px",
    height: "192px"
}