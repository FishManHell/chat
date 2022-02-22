import React, {FC} from 'react';
import {MessageValue} from "../../typing/Interfaces";

const Message:FC<MessageValue> = ({value}) => {
    return <p className={'wrapper_chat_page__itemChat'}>{value}</p>
};

export default Message;


// The Message component is the component that displays the func array.map in the component just above.
// The component accepts Value is the value that is displayed for user