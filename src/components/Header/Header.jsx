import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../styles/style';
import List from './List/List';
import logo from '../../img/logoHead.png'
import Modal from '../common/Modal/Modal';
import Auth from './Auth/Auth';

function Header(props) {
    const [modalActive, setModalActive] = useState(false)
    const [count, setCount] = useState(props.messages.length);
    useEffect(() => {
        setCount(props.messages.length);
    }, [props.messages]);
    return (
        <HeaderMain>
            <Container>
                <Main>
                    <Logo>
                        <Link to="/">
                            <img src={logo} alt="Главная" style={LogoStyle} />
                        </Link>
                    </Logo>
                    <Lists>
                        <List name="Обо мне" href="/about" />
                        <List name="Портфолио" href="/portfolio" />
                        <List name="Контакты" href="/contacts" />
                        <List name="Пользователи" href="/users" />
                        <List name="Чат" href="/chat" count={count} />
                        <List name="Для тестов" href="/test" />
                    </Lists>
                    <Login>
                        {props.isAuth ? props.login :
                            <button onClick={() => setModalActive(true)}>Войти</button>
                        }
                    </Login>
                </Main>
            </Container>
            <Modal active={modalActive} setActive={setModalActive}>
                <Auth {...props} />
            </Modal>
        </HeaderMain>
    )
};
const HeaderMain = styled.header`
    padding: 0.625rem 0;
    background-color: #3f413f;
    filter: drop-shadow(0 1px 1px #000);
`;
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.div`
`
const Lists = styled.ul`
    display: flex;
`;
const Login = styled.div`
    font-weight: 700;
    color: #FFFFFF;
    display: flex;
    padding: .25rem .375rem;
    border: 1px dashed #FFFFFF;
    border-radius: .75rem;
`
const LogoStyle = {
    width: "40px",
    height: "40px"
}
export default Header;