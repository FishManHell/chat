import React, {FC} from 'react';
import {MessageValue} from "../../typing/Interfaces";

const Message: FC<MessageValue> = ({value, index, remove}) => {
    return (
        <div className={'wrapper_chat_page__main_chat_block'}>
            <div className={'wrapper_chat_page__itemChat'}>
                <p className={'wrapper_chat_page__chat_text'}>{value}</p>
            </div>
            <button className={'wrapper_chat_page__remove_item_chat'} onClick={() => remove(index)}>X</button>
        </div>
    )
};

export default Message;


// The Message component is the component that displays the func array.map in the component just above.
// The component accepts Value is the value that is displayed for user