import React from 'react';
import {ButtonSend} from "../../TypeScriptTyping/Interfaces";

const SendButton = ({message, value, text}: ButtonSend) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button disabled={!value.length} className={'wrapper_chat_page__button'} onClick={() => message()}>{text}</button>
        </div>
    );
};

export default SendButton;