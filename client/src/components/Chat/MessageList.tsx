import React from 'react';
import Message from "./Message";

const MessageList = ({array}: any) => {
    return (
        <div className={'wrapper_chat_page__wrapper_for_itemChat'}>
            <div className={'wrapper_chat_page__block_for_itemChat'}>
                {array.map((message: any) =>  <Message key={message.id} {...message}/>)}
            </div>
        </div>
    );
};

export default MessageList;