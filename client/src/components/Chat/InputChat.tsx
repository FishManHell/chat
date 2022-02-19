import React from 'react';
import {FieldChat} from "../../TypeScriptTyping/Interfaces";

const InputChat = ({value, change}: FieldChat) => {
    return (
        <div className={'wrapper_chat_page__block_input'}>
            <input
                value={value}
                type="text"
                className={'wrapper_chat_page__input'}
                placeholder={'write some text'}
                onChange={e => change(e)}
            />
        </div>
    );
};

export default InputChat;