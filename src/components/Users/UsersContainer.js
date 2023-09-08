import React from 'react';
import { connect } from 'react-redux';
import { followUser, setCurrentPage, unfollowUser, getUsersThunk } from '../../Redux/usersPageReduser';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
// import { Navigate } from 'react-router-dom';
import { getCurrentPage, getTotalPages, getUsers, getIsAuth, getIsFetching } from '../../Redux/users-selector';

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunk(this.props.currentPage)
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.currentPage !== prevProps.currentPage) {
            this.props.getUsersThunk(this.props.currentPage)
        }
    }
    render() {
        // if (!this.props.isAuth) return <Navigate to={'/'} />
        return this.props.isFetching ? <Preloader /> : <Users {...this.props} />
    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        totalPages: getTotalPages(state),
        isFetching: getIsFetching(state),
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps, {
    followUser, unfollowUser, setCurrentPage, getUsersThunk
})(UsersContainer);