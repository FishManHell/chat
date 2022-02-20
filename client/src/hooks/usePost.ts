import {useState} from "react";
import axios from "axios";
import {urlStr} from "../utils/url";
import {UserPost} from "../typing/Types";


export default function (): UserPost {
    const [token, setToken] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const clearToken = (): void => {
        setToken('');
    }

    const requestPost = async (path: string, user: object) => {
        setLoading(true)
        try {
            const request = await axios.post(`${urlStr}${path}`, {...user})
            setToken(request.headers.authorization.split(' ')[1])
        } catch (e: any) {
            setError(e)
            throw Error(e)
        } finally {
            setLoading(false);
        }
    }

    return [token, error, loading, requestPost, clearToken]
}

// Тут у нас кастомный хук для post запроса - это function без аргументов и возвращает массив со всеми func and state в деструктуризации.
// Хук, хранит в себе три стейта с которыми мы работаем.
// 1. это token state - в котором мы храним response с header который получили и потом его используем в своих целях.
// 2. это error state - в котором мы храним ошибку, если мы получили отрицательный ответ с сервера и так же используем где нам нужно.
// 3. это loading state - создан для ленивой загрузки - чтоб во время обработки запроса и ожидания ответа, user видел какую-то загрузку - это boolean значения
// 4. Это функция clearToken сделана для очистки state token так как когда мы выходим с профиля нам он уже не нужен больше.
// 5. requestPost это асинхронная function которая принемает path - это ссылка для запроса and user который принимает name and password.
// Внутри function мы используем первым делом state loading для загрузки,
// после этого у нас есть блок try and catch в try у нас лежит асинхронный axios.post запрос, который принимает url and body в нашем случае
// И возвращает response - в нашем случае нас интересует header так как там лежит token. Ложем в state token и работаем с ним
// Если ответ пришел плохой, то автоматически попадает в catch и мы выводим ошибку и ложем в стейт чтоб потом вывести на экран.