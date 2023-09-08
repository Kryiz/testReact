import React, { useEffect } from "react";
import s from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [active]);
    return (
        <div className={`${s.modal} ${active ? s.modalActive : ''}`} onClick={() => {setActive(false)}}>
            <div className={`${s.body} ${active ? s.bodyActive : ''}`} onClick={e => {e.stopPropagation()}}>
                {children}
            </div>
        </div>
    )
}
export default Modal;