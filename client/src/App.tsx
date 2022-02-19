import React, {FC} from 'react';
import './App.sass'
import {Routes, Route, Navigate} from "react-router-dom";
import usePost from "./hooks/usePost";
import LoaderComment from "./components/Loader/LoaderComment";
import LoginPage from "./components/Login/LoginPage";
import Chat from "./components/Chat/Chat";

type JSXNode = JSX.Element | null;

const App:FC = () => {
    const [token, error, loading, requestPost, clearToken] = usePost();

    const loader = ():JSXNode => <LoaderComment/>;

    const component = ():JSXNode => <LoginPage requestPost={requestPost}/>;

    const checkLoader = ():JSXNode => loading ? loader() : component();

    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <Routes>
                    {token ?
                        <Route path={'chat'} element={<Chat token={token} clearToken={clearToken}/>}/>
                        :
                        <Route path={'login'} element={checkLoader()}/>
                    }
                    <Route path={'*'} element={<Navigate to={token ? 'chat' : 'login'}/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;