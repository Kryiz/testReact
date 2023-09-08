import React from "react";
import User from "./User/User";
import s from './Users.module.css';
import { Container } from "../../styles/style";

const Users = (props) => {
    let pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(i)
    }
    return (
        <div className={s.main}>
            <Container>
                <div className={s.pagination}>
                    {pages.map(p => {
                        return <span key={p}
                            onClick={props.currentPage !== p ? () => { props.setCurrentPage(p) } : null}
                            className={props.currentPage === p ? s.selectedPage : s.unselectedPage}
                        >{p}</span>
                    })}
                </div>
                <User users={props.users} followUser={props.followUser} unfollowUser={props.unfollowUser} />
            </Container>
        </div>
    )
}
export default Users;