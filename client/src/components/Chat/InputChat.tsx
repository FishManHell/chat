import React from 'react';

interface FieldChat {
    value: string,
    change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputChat = ({value, change}: FieldChat) => {
    return (
        <div className={'wrapper_chat_page__block_input'}>
            <input value={value} type="text" className={'wrapper_chat_page__input'} placeholder={'write some text'}/>
        </div>
    );
};

export default InputChat;