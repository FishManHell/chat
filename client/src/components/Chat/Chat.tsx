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

// Это у нас компонент Chat - он принимает 2 пропса это token и func для очистки стейта токена.
// Так же здесь мы диcтруктуризируем все из кастомного хука useSocket и отдаем два значения которые он принимает
// Со всеми значениями с хука мы работаем.
// Так же есть у нас func handleExitPage которая выходит из страницы /chat, делает отписку от, socket и очищает поле token
// Еще есть 4 компонента
// 1. InputChat - компонент с полем чат где мы пишем message - принимает два пропса для контролирования value
// 2. SendButton - компонент с кнопкой которая отправляет message - принимает props func - sendMessageSocket.
// 3. button Logout которая обнуляет стейт token, func disconnectSocket которая отписывается от, socket.
// 4. MessageList это компонент где мы отрисовуем в message которые мы отправили ну или получили,
// в данном случае которые отправили
