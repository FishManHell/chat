import React from 'react';
import InputChat from "./InputChat";
import SendButton from "./SendButton";
import Logout from "./Logout";;
import useSocket from "../../hooks/useSocket";
import MessageList from "./MessageList";

interface Token {
    token: string
    clearToken: () => void
}

const Chat = ({token, clearToken}: Token) => {
    const [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange] = useSocket('', token);

    function handleExitPage(): void {
        disconnectSocket()
        clearToken()
    }

    return (
        <div className={'wrapper_chat_page'}>
            <div className={'container'}>
                <div className={'wrapper_chat_page__wrapper_block_chat'}>
                    <div className={'wrapper_chat_page__block_input_and_button_send'}>
                        <InputChat value={value} change={onChange}/>
                        <div className={'wrapper_chat_page__main_block_buttons'}>
                            <SendButton message={sendMessageSocket} text={'Send'} value={value}/>
                            <Logout exit={handleExitPage} text={'Logout'}/>
                        </div>
                        <MessageList arrayMessage={arrayMessage}/>
                        {/*<div className={'wrapper_chat_page__wrapper_for_itemChat'}>*/}
                        {/*    <div className={'wrapper_chat_page__block_for_itemChat'}>*/}
                        {/*        {arrayMessage.map(message =>  <Message key={message.id} {...message}/>)}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;