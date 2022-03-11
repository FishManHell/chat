import {useState} from "react";
import axios from "axios";
import {urlStr} from "../utils/url";
import {UserPost} from "../typing/Types";
import {tokenName} from "../typing/Interfaces";

export default function (): UserPost {
    const [tokenName, setTokenName] = useState<tokenName> ({token: '', fullName: ''});
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [checkError, setCheck] = useState<boolean>(true);


    const clearToken = (): void => {
        setTokenName({token: '', fullName: ''});
    }

    const clearErrorState = (): void => {
        setError('');
        setCheck(false);
    }

    const requestPost = async (path: string, user: object) => {
        setLoading(true)
        try {
            const request = await axios.post(`${urlStr}${path}`, {...user})
            setTokenName(
                {token: request.headers.authorization.split(' ')[1],
                    fullName: JSON.parse(request.config.data).username}
            )
        } catch (e: any) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }

    return [tokenName, error, loading, requestPost, clearToken, clearErrorState, checkError]
}

// Here we have a custom hook for the post request - this is a function with no arguments and returns an array with all the func and state in the destructuring.
// Hook stores three states with which we work.
// 1. This is a token state - in which we store the response with the header that we received and then use it for our own purposes.
// 2. this is the error state - in which we store the error if we received a negative response from the server and also use it where we need it.
// 3. this loading state - created for lazy loading - so that during the processing of the request and waiting for a response, the user sees some kind of loading - these are boolean values
// 4. This clearToken function is made to clear the state token, since when we exit the profile, we no longer need it.
// 5. requestPost is an asynchronous function that accepts path is a link for the request and user that accepts a name and password.
// Inside the function, we first use state loading to load,
// after that we have a try and catch block in try we have an asynchronous axios.post request that takes url and body in our case
// And it returns a response - in our case, we are interested in the header, since the token is there. We lay down in the state token and work with it
// If the response is bad, it automatically falls into the catch and we display an error and put it in the state so that we can display it later.