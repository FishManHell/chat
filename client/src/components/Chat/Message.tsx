import React from 'react';

interface MessageValue {
    value: string
}

const Message = ({value}: MessageValue) => {
    return <p className={'wrapper_chat_page__itemChat'}>{value}</p>
};

export default Message;