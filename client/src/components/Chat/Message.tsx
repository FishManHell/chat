import React, {FC} from 'react';
import {MessageValue} from "../../typing/Interfaces";

const Message:FC<MessageValue> = ({value}) => {
    return <p className={'wrapper_chat_page__itemChat'}>{value}</p>
};

export default Message;


// Компонент Message это компонент, который выводит на экран func array.map в компоненте чуть выше.
// Компонент принимает Value это то значения которое выводиться на экран для, user