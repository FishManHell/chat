import {useState} from "react";

interface requestTest {
    url: string | undefined,
    user: object | undefined
}

export default function () {
    const [token, setToken] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const clearToken = (): void => setToken('');

    const requestPost = async (path: string, user: string) => {
        setLoading(true)
        try {
            const request = await axios.post(`${urlStr}${path}`, {...user})
            const dataToken = request.headers.authorization.split(' ')[1]
            setToken(dataToken)
            return dataToken
        } catch (error) {
            setError(error.message)
            throw Error(error)
        } finally {
            setLoading(false);
        }
    }

    return [token, error, loading, requestPost, clearToken]
}