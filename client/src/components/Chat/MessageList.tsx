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


// Компонент MessageList где у нас происходит отрисовка всех наших messages которые иы отправили или получили
// Компонент принимает 1 пропс
// выводим на экран при помощи map это метод для работы с array