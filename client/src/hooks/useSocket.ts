import {useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import openSocket from "socket.io-client";
import {urlStr} from "../utils/url";

export default function (initialValue: string, token: string) {
    const [value, setValue] = useState<string>(initialValue)
    const [arrayMessage, setArrayMessage] = useState<Array<object>>([]);
    const [socketState, setSocketState] = useState<void | null>(null);
    const location = useLocation();

    const onChange = (e: React.FocusEvent<HTMLFormElement>):void => {
        const values = e.target.value
        setValue(values)
    }

    const creatConnect = useCallback((token: string) => {
        const socket = openSocket.connect(`${urlStr}${location.pathname}`, {
            forceNew: true,
            reconnection: true,
            extraHeaders: {Authorization: `Bearer ${token}`}
        });
        // const socket = openSocket.connect(`${urlStr}${location.pathname}`, {
        //     forceNew: true,
        //     reconnection: true,
        //     extraHeaders: {Authorization: `Bearer ${token}`}
        // });
        setSocketState(socket)
        connectSocket(socket)
        getMessageSocket(socket)
    }, [getMessageSocket])


    function connectSocket(socket: object) {
        socket.on('connect', () => {
            socket.emit('success')
            console.log('connected')
        })
    }

    function getMessageSocket(socket: object) {
        socket.on('message', (data: object) => {
            setArrayMessage(prevObj => [...prevObj, data])
            setValue('')
            console.log(data)
        })
    }

    const disconnectSocket = () => {
        socketState.disconnect()
    }

    const sendMessageSocket = () => {
        socketState.emit('message', {id: new Date().getTime(), value})
    }

    useEffect(() => {
        if (token) {
            creatConnect(token)
        }
    }, [token])

    return [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange]

}