import React, {FC} from 'react';
import {ButtonSend} from "../../typing/Interfaces";

const SendButton:FC<ButtonSend> = ({message, value, text}) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button disabled={!value.length} className={'wrapper_chat_page__button'} onClick={() => message()}>{text}</button>
        </div>
    );
};

export default SendButton;