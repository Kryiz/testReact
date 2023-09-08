import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthUserData, authLoginThunk } from "../../Redux/HeaderReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages,
        isAuth: state.headerPage.isAuth,
        UserId: state.headerPage.UserId,
        email: state.headerPage.email,
        login: state.headerPage.login
    }
}
export default connect(mapStateToProps, {
    getAuthUserData, authLoginThunk
})(HeaderContainer);