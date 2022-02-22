import React, {FC} from 'react';
import {FieldChat} from "../../typing/Interfaces";

const InputChat:FC<FieldChat> = ({value, change}) => {
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


// controllable component InputChat - takes two props
// 1. value
// 2. func change for controlled operation of input
