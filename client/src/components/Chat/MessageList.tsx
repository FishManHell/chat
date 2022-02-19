import React from 'react';
import Message from "./Message";

interface MessageItem {
    id: number,
    value: string
}


interface MessageListProps {
    arrayMessage: MessageItem[]
}

const MessageList = ({arrayMessage}: MessageListProps) => {
    return (
        <div className={'wrapper_chat_page__wrapper_for_itemChat'}>
            <div className={'wrapper_chat_page__block_for_itemChat'}>
                {arrayMessage.map(message =>  <Message key={message.id} {...message}/>)}
            </div>
        </div>
    );
};

export default MessageList;