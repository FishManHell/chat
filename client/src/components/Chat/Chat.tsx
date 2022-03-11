import React, {FC} from 'react';
import InputChat from "./InputChat";
import SendButton from "./SendButton";
import Logout from "./Logout";
import MessageList from "./MessageList";
import useSocket from "../../hooks/useSocket";
import {Token} from "../../typing/Interfaces";

const Chat: FC<Token> = ({token, name, clearToken}) => {
    const [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange, removeItemChat] = useSocket('', token);

    function handleExitPage(): void {
        disconnectSocket()
        clearToken()
        console.log('You just lost chat page')
    }

    return (
        <div className={'wrapper_chat_page'}>
            <div className={'container container_chat'}>
                <div className={'wrapper_chat_page__main_block_name'}>
                    <h1 className={'wrapper_chat_page__header_text'}>{name}</h1>
                </div>
                <div className={'wrapper_chat_page__wrapper_block_chat'}>
                    <div className={'wrapper_chat_page__block_input_and_button_send'}>
                        <div className={'wrapper_chat_page__wrapper_input_buttons'}>
                            <InputChat value={value} change={onChange}/>
                            <div className={'wrapper_chat_page__main_block_buttons'}>
                                <SendButton message={sendMessageSocket} text={'Send'} value={value}/>
                                <Logout exit={handleExitPage} text={'Logout'}/>
                            </div>
                        </div>
                        <MessageList array={arrayMessage} removeItemChat={removeItemChat}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;

// This is our Chat component - it takes 2 properties of this token and functions to clear the state of the token.
// Also here we structurize everything from the custom use Socket hook and pass in the two values it takes
// We work with all values from the hook.
// We also have func handleExitPage which exits the /chat page, unsubscribes from socket and clears the token field
// There are 4 other components
// 1. InputChat - a component with a chat field where we write a message - takes two props to control the value
// 2. SendButton - a component with a button that sends a message - receives props func - sendMessageSocket.
// 3. button Logout which resets the token state, func disconnectSocket which unsubscribes from, socket.
// 4. MessageList is a component where we will draw in the message that we sent or received,
// in this case, who sent