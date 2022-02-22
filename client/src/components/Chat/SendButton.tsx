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

// компонент SendButton - принимает 3 props
// 1. func message для отправки сообщения
// 2. value - для того чтоб disabled кнопки сделать - типа,
// что если значения еще нет то ты не сможешь нажать на эту кнопку
// text это просто значения которая принимает button кнопка
