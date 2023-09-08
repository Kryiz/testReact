import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/reduxStore";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/global";
import "./styles/global.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import MainPage from "./components/MainPage/MainPage";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/common/Preloader/Preloader";

const AboutContainer = React.lazy(() =>
    import("./components/About/AboutContainer")
);
const Profile = React.lazy(() => import("./components/Profile/Profile"));
const ChatContainer = React.lazy(() =>
    import("./components/Chat/ChatContainer")
);
const ContactsContainer = React.lazy(() =>
    import("./components/Contacts/ContactsContainer")
);
const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersContainer")
);
const UserProfileContainer = React.lazy(() =>
    import("./components/UserProfile/UserProfileContainer")
);
const TestPageContainer = React.lazy(() =>
    import("./components/TestPage/TestPageContainer")
);

const Wrapper = styled.div`
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;
const Content = styled.div`
    flex: 1 1 auto;
`;

export default function App(props) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <Wrapper>
                    <GlobalStyle />
                    <HeaderContainer />
                    <Content>
                        <Routes>
                            <Route exact path="/" element={<MainPage />} />
                            <Route path="*" element={<Error />} />
                            <Route
                                path="/about"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <AboutContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/portfolio"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <Profile />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/chat"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <ChatContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/contacts"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <ContactsContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/users"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <UsersContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/user/:userId?"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <UserProfileContainer />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="/test"
                                element={
                                    <Suspense fallback={<Preloader />}>
                                        <TestPageContainer />
                                    </Suspense>
                                }
                            />
                        </Routes>
                    </Content>
                    <Footer />
                </Wrapper>
            </Provider>
        </BrowserRouter>
    );
}