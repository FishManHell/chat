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

    const sendMessageSocket = (): void => {
        socketState.emit('message', {id: new Date().getTime(), value: value})
    }

    useEffect(() => {
        if (token) {
            creatConnect(token)
        }
    }, [token])

    return [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange]

}