import {useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import io, {Socket} from "socket.io-client";
import {urlStr} from "../utils/url";

type UseSocket = [Array<object>, () => void, string, () => void, (e: React.ChangeEvent<HTMLInputElement>) => void]


export default function (initialValue: string, token: string): UseSocket {
    const [value, setValue] = useState<string>(initialValue)
    const [arrayMessage, setArrayMessage] = useState<Array<object> | []>([]);
    const [socketState, setSocketState] = useState<Socket | any>(null);
    const location = useLocation();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        const values = e.target.value
        setValue(values)
    }

    const creatConnect = useCallback((token: string):void => {
        const socket = io(`${urlStr}${location.pathname}`, {
            forceNew: true,
            reconnection: true,
            extraHeaders: {Authorization: `Bearer ${token}`}
        })
        setSocketState(socket)
        connectSocket(socket)
        getMessageSocket(socket)
    }, [getMessageSocket])


    function connectSocket(socket: Socket) {
        socket.on('connect', () => {
            socket.emit('success')
        })
    }

    function getMessageSocket(socket: Socket) {
        socket.on('message', (data: object) => {
            setArrayMessage(prevObj => [...prevObj, data])
            setValue('')
        })
    }

    const disconnectSocket = ():void => {
        socketState.disconnect()
    }

    const sendMessageSocket = ():void => {
        socketState.emit('message', {id: new Date().getTime(), value: value})
    }

    useEffect(() => {
        if (token) {
            creatConnect(token)
        }
    }, [token])

    return [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange]

}

// Здесь у нас кастомный хук Socket для работы с сокетами в нашем случае это function принимает 2 параметра.
// (начальное значения и token) и return array со всеми function and state и потом деструктуризацию делаем.
// В этом хуке есть несколько хуков и function для работы с сокетом.
// 1. state value для работы с полем input в котором мы пишем some message и отправляем его.
// 2. state arrayMessage state для распечатывания message которые мы получаем.
// 3. socketState state это для работы с сокетом - в этот state положили socket и потом работаем с ним где нам нужно.
// 4. function onChange для изменения значения в input и получения его.
// 5. function creatConnect это основная function которая принимает hook useCallback - он принимает callback and array,
// внутри этой function hook мы подключаемся к сокетам и передаем token и передаем в другие function socket, чтоб работать с ним.
// 6. function connectSocket это функция, которая принимает параметром socket и мы подписываемся на socket при помощи события connect.
// 7. function getMessageSocket это функция, которая принимает параметром socket и подписываемся на event message - это события где мы получаем message.
// 8. function disconnectSocket в этой функции мы используем state socket и отписываемся от сокета.
// 9. function sendMessageSocket в этой функции мы используем state socket и отправляем some message в чат
// 10. это hook useEffect внутри него компоненты жизненного цикла - он принимает 2 параметра callback and array dependencies
// в нашем случае мы проверяем есть ли токен и если есть то запускай function creatConnect и подписывайся на socket и следим за изменениями state token в array dependencies

