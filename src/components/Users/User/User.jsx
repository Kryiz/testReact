import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {
    const follow = (userId) => {
        props.followUser(userId)
    }
    const unfollow = (userId) => {
        props.unfollowUser(userId)
    }
    return (props.users.map(user => {
        return (
            <div key={user.id} className={s.item}>
                <div className={s.left}>
                    <NavLink to={'/user/' + user.id} className={s.userLink} >
                        <div className={s.imgFolder}>
                            <img src={'https://robohash.org/' + user.id + '?size=150x150'} alt={user.name} />
                        </div>
                    </NavLink>
                </div>
                <div className={s.middle}>
                    <p><span className={s.intro}>Имя :</span> {user.first_name}</p>
                    <p><span className={s.intro}>Фамилия :</span> {user.last_name}</p>
                    <p><span className={s.intro}>Почта :</span> {user.email}</p>

                </div>
                <div className={s.right}>
                    {!user.follow ?
                        <button onClick={() => { follow(user.id) }} className={s.follow}>Подписаться</button> :
                        <button onClick={() => { unfollow(user.id) }} className={s.follow}>Отписаться</button>
                    }
                </div>
            </div>
        )
    }))
}
export default User;