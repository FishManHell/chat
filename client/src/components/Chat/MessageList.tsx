import React, {FC} from 'react';
import Message from "./Message";

const MessageList:FC<any> = ({array}) => {
    return (
        <div className={'wrapper_chat_page__wrapper_for_itemChat'}>
            <div className={'wrapper_chat_page__block_for_itemChat'}>
                {array.map((message: any) =>  <Message key={message.id} {...message}/>)}
            </div>
        </div>
    );
};

export default MessageList;


// The MessageList component where we render all our messages that you sent or received
// Component takes 1 prop
// display using map this is a method for working with array