import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";
import Status from "./Status/Status";


const About = (props) => {
    return (
        <AboutMain>
            <Container>
                <Title>
                    Обо мне
                </Title>
                <Status {...props} />
            </Container>
        </AboutMain>
    )
}

const AboutMain = styled.section`
    padding: 50px 0 70px;
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`;
export default About;