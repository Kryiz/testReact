import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile, getUserThunk } from "../../Redux/UserProfileReducer";
import UserProfile from "./UserProfile";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class UserProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunk(this.props.params.userId)
    }
    componentWillUnmount() {
        this.props.getUserProfile(null)
    }
    render() {
        return <UserProfile user={this.props.user} />
    }

}
let mapStateToProps = (state) => {
    return {
        user: state.userProfilePage.user
    }
}
let withParamsUserProfile = withParams(UserProfileContainer)
export default connect(mapStateToProps, {
    getUserProfile, getUserThunk
})(withParamsUserProfile);