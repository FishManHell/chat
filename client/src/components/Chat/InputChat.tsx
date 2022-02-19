import React from 'react';

const InputChat: React.FC = () => {
    return (
        <div className={'wrapper_chat_page__block_input'}>
            <input type="text" className={'wrapper_chat_page__input'} placeholder={'write some text'}/>
        </div>
    );
};

export default InputChat;