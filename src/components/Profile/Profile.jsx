import React from "react";
import styled from "styled-components";
import { Container } from "../../styles/style";

const Profile = () => {
    return (
        <ProfileMain>
            <Container>
                <Title>
                    Страница профиля
                </Title>
                <Text>
                    Очень много текста и примеров.
                </Text>
            </Container>
        </ProfileMain>
    )
}

const ProfileMain = styled.section`
    padding: 50px 0 70px;
`
const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
`
const Text = styled.p`
    color: rgb(100 85 85);
    margin-bottom: 20px;
`
export default Profile;