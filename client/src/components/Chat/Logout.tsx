import React from 'react';
import {ButtonLogout} from "../../typing/Interfaces";

const Logout = ({exit, text}: ButtonLogout) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button className={'wrapper_chat_page__button'} onClick={exit}>{text}</button>
        </div>
    );
};

export default Logout;