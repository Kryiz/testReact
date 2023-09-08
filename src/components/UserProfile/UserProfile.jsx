import React from "react";
import { Container } from "../../styles/style";
import Preloader from "../common/Preloader/Preloader";
import s from './UserProfile.module.css';

const UserProfile = (props) => {
    if (!props.user) {
        return <Preloader />
    }
    return (
        <div className={s.up}>
            <Container>
                <div className={s.up__item}>
                    <h3 className={s.up__name}>{props.user.first_name} {props.user.last_name}</h3>
                    <div className={s.up__imgFolder}>
                        <img src={'https://robohash.org/' + props.user.id + '?size=250x250'} alt={props.user.name} className={s.up__img} />
                    </div>
                    <div>
                        <div className={s.up__info}>{props.user.email}</div>
                        <div className={s.up__info}>{props.user.phone}</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default UserProfile;