import React from 'react';

interface ButtonLogout {
    exit: () => void
    text: string
}

const Logout = ({exit, text}: ButtonLogout) => {
    return (
        <div className={'wrapper_chat_page__block_button'}>
            <button className={'wrapper_chat_page__button'} onClick={exit}>{text}</button>
        </div>
    );
};

export default Logout;