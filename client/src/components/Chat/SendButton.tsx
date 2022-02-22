import React, {FC} from 'react';
import {ButtonSend} from "../../typing/Interfaces";

const SendButton:FC<ButtonSend> = ({message, value, text}) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button disabled={!value.length} className={'wrapper_chat_page__button'} onClick={() => message()}>{text}</button>
        </div>
    );
};

export default SendButton

// SendButton component - takes 3 props
// 1. func message to send a message
// 2. value - in order to make disabled buttons - like,
// that if there is no value yet, you won't be able to click on this button
// text is just the values that button takes

