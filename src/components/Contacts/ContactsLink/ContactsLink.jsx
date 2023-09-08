import React from "react";
import { Link } from "react-router-dom";
import s from "./ContactsLink.module.css"

const ContactsLink = (props) => {
    return <Link to={props.href} className={s.link}>{props.text}</Link>
}
export default ContactsLink;