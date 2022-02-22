import React, {FC} from 'react';
import {ButtonLogout} from "../../typing/Interfaces";

const Logout:FC<ButtonLogout> = ({exit, text}: ButtonLogout) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button className={'wrapper_chat_page__button'} onClick={exit}>{text}</button>
        </div>
    );
};

export default Logout;

// Button Logout для отпистки user от сокета и переход на предыдущую страницу
// Принимает 2 пропса
// 1. func exit для выхода из /chat page
// 2. text - значения которое принимает button