import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";

const Footer = () => {
    return (
        <FooterMain>
            <Container>
                <Text>
                    2023 &copy; Антон
                </Text>
            </Container>
        </FooterMain>
    )
}
const FooterMain = styled.footer`
    padding: 1.25rem 0;
    background-color: #3f413f;
    filter: drop-shadow(0 -1px 1px #000);
`;
const Text = styled.p`
    text-align: right;
    color: #ffffff;
`
export default Footer;