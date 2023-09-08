import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = (props) => {
    return (
        <HeaderList>
            <NavLink
                to={props.href}
                style={({ isActive, isPending}) => {
                    return {
                        fontWeight: 700,
                        color: isActive ? "#61dafb" : "#ffffff"
                    }
                }}>
                {props.name}
                {props.count ? <Count>{props.count}</Count> : ''}
            </NavLink>
        </HeaderList>
    )
}
const HeaderList = styled.li`
    margin-left: 1.25rem;
`;
const Count = styled.span`
    color: #3f413f;
    background: #fff;
    padding: 0 5px;
    border-radius: 50%;
    margin-left: 5px;
    font-size: 12px;
`
export default List;