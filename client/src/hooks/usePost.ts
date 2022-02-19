import {useState} from "react";
import axios from "axios";
import {urlStr} from "../utils/url";
import {UserPost} from "../TypeScriptTyping/Types";


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