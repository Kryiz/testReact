import React from "react";
import styled from "styled-components";
import { Container } from '../../styles/style'
import ContactsLink from "./ContactsLink/ContactsLink";

export default function Contacts(props) {
    return (
            <ContactsMain>
                <Container>
                    <ContatctsTitle>
                        { props.contacts.title }
                    </ContatctsTitle>
                    <ContactsText>
                        { props.contacts.adress }
                    </ContactsText>
                    <ContactsLink href="telto:+7" text={ props.contacts.phone } />
                    <ContactsLink href="mailto:+7" text={ props.contacts.mail } />
                </Container>
            </ContactsMain>
    )
}
const ContactsMain = styled.section`
    padding: 50px 0 70px;
`
const ContatctsTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`
const ContactsText = styled.p`
    color: #000;
    margin-bottom: 1rem;
`