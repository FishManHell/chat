import React from 'react';
import InputChat from "./InputChat";
import SendButton from "./SendButton";
import Logout from "./Logout";
import Message from "./Message";

const Chat: React.FC = () => {
    return (
        <div className={'wrapper_chat_page'}>
            <div className={'container'}>
                <div className={'wrapper_chat_page__wrapper_block_chat'}>
                    <div className={'wrapper_chat_page__block_input_and_button_send'}>
                        <InputChat/>
                    {/* props value and onChange func*/}
                        <div className={'wrapper_chat_page__main_block_buttons'}>
                            <SendButton/>
                            {/*sendButton - 3 props (message, text, value */}
                            <Logout/>
                        {/*logout two props - exit, text*/}
                        </div>
                        <div className={'wrapper_chat_page__wrapper_for_itemChat'}>
                            <div className={'wrapper_chat_page__block_for_itemChat'}>
                            {/* тут будет map для распечатки message*/}
                                <Message/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;