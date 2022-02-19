import React, {FC} from 'react';
import InputChat from "./InputChat";
import SendButton from "./SendButton";
import Logout from "./Logout";
import MessageList from "./MessageList";
import useSocket from "../../hooks/useSocket";
import {Token} from "../../typing/Interfaces";

const Chat: FC<Token> = ({token, clearToken}) => {
    const [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange] = useSocket('', token);

    function handleExitPage(): void {
        disconnectSocket()
        clearToken()
        console.log('You just lost chat page')
    }

    return (
        <div className={'wrapper_chat_page'}>
            <div className={'container'}>
                <div className={'wrapper_chat_page__wrapper_block_chat'}>
                    <div className={'wrapper_chat_page__block_input_and_button_send'}>
                        <div className={'wrapper_chat_page__wrapper_input_buttons'}>
                            <InputChat value={value} change={onChange}/>
                            <div className={'wrapper_chat_page__main_block_buttons'}>
                                <SendButton message={sendMessageSocket} text={'Send'} value={value}/>
                                <Logout exit={handleExitPage} text={'Logout'}/>
                            </div>

                        </div>
                        <MessageList array={arrayMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;