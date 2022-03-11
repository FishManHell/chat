import {useLocation} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import io, {Socket} from "socket.io-client";
import {urlStr} from "../utils/url";
import {UseSocket} from "../typing/Types";

export default function (initialValue: string, token: string): UseSocket {
    const [value, setValue] = useState<string>(initialValue)
    const [arrayMessage, setArrayMessage] = useState<Array<object> | []>([]);
    const [socketState, setSocketState] = useState<Socket | any>(null);
    const location = useLocation();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const values = e.target.value
        setValue(values)
    }

    const removeItemChat = (id: number): void => {
        const array = [...arrayMessage]
        // @ts-ignore
        const index = array.findIndex(item => item.id === id) // fix this problem
        console.log(index)
        if (index !== -1) {
            array.splice(index, 1)
        }
        setArrayMessage(array)
    }

    const creatConnect = useCallback((token: string): void => {
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

    const disconnectSocket = (): void => socketState.disconnect()

    const sendMessageSocket = (): void => socketState.emit('message', {id: new Date().getTime(), value: value})

    useEffect(() => {
        if (token) {
            creatConnect(token)
        }
    }, [token])

    return [arrayMessage, sendMessageSocket, value, disconnectSocket, onChange, removeItemChat]
}

// Here we have a custom Socket hook for working with sockets, in our case this function takes 2 parameters.
// (initial value and token) and return array with all function and state and then we do destructuring.
// This hook has several hooks and a function to work with the socket.
// 1. state value for working with the input field in which we write some message and send it.
// 2. state arrayMessage state to print the messages we receive.
// 3. socketState state is for working with a socket - we put a socket in this state and then we work with it where we need.
// 4. function onChange to change the value in input and get it.
// 5. function creatConnect is the main function that accepts hook useCallback - it accepts callback and array,
// inside this function hook we connect to sockets and pass token and pass to other function socket to work with it.
// 6. function connectSocket is a function that takes a socket as a parameter and we subscribe to the socket with the connect event.
// 7. function getMessageSocket is a function that takes a socket as a parameter and subscribes to an event message - these are events where we receive a message.
// 8. function disconnectSocket In this function we use the state socket and unsubscribe from the socket.
// 9. function sendMessageSocket in this function we use state socket and send some message to chat
// 10. this is the useEffect hook inside it lifecycle components - it takes 2 parameters callback and array dependencies
// in our case, we check if there is a token and if so, run function creatConnect and subscribe to the socket and monitor the state token changes in the array dependencies

