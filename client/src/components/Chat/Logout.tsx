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

// Button Logout to unsubscribe user from the socket and go to the previous page
// Takes 2 props
// 1. func exit to exit /chat page
// 2. text - the value that the button takes