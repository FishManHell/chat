import React from 'react';
import {MessageValue} from "../../typing/Interfaces";

const Message = ({value}: MessageValue) => {
    return <p className={'wrapper_chat_page__itemChat'}>{value}</p>
};

export default Message;