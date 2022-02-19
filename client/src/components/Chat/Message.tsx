import React, {FC} from 'react';
import {MessageValue} from "../../typing/Interfaces";

const Message:FC<MessageValue> = ({value}) => {
    return <p className={'wrapper_chat_page__itemChat'}>{value}</p>
};

export default Message;