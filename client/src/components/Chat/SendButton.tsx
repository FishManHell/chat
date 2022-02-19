import React from 'react';

interface Button {
    message: () => void,
    text: string,
    value: string
}

const SendButton = ({message, value, text}: Button) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button disabled={!value.length} className={'wrapper_chat_page__button'} onClick={() => message()}>{text}</button>
        </div>
    );
};

export default SendButton;