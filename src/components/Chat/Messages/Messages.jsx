import React from "react";
import styled from "styled-components";

const Message = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 2px 1px 3px #aaa;
    background: #fff;
    border-radius: 8px;
    padding: 6px 8px;
    margin-bottom: 10px;
`
const Avatar = styled.div`
    font-weight: 700;
    padding: 14px 20px;
    border-radius: 50%;
    background: #e2e2e2;
    color: #fff;
`
const Text = styled.p`
    color: rgb(100 85 85);
`

function Messages(props) {
    return ( props.messages.map(function(post) {
            return <Message key={post.id}>
                <Avatar>{post.name}</Avatar>
                <Text>
                    {post.message}
                </Text>
            </Message>
        })
    )
}
export default Messages;