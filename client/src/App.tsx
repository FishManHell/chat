import React, {FC} from 'react';
import './App.sass'
import {Routes, Route, Navigate} from "react-router-dom";
import usePost from "./hooks/usePost";
import LoaderComment from "./components/Loader/LoaderComment";
import LoginPage from "./components/Login/LoginPage";
import Chat from "./components/Chat/Chat";
import {JSXNode} from "./typing/Types";

const App:FC = () => {
    const [token, error, loading, requestPost, clearToken] = usePost();

    const loader = ():JSXNode => <LoaderComment/>;

    const componentLogin = ():JSXNode => <LoginPage requestPost={requestPost}/>;

    const checkLoader = ():JSXNode => loading ? loader() : componentLogin();

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


//Это начальный компонент где у нас проходит роутинг,
// где мы проверяем существует ли у нас token и если до то показываем
// одну страницу и если нет то оставляем прежнюю, кастомный хук usePost
// в котором обрабатываться post request,
// присутствует ленивая загрузка которая обрабатывает ожидания ответа с сервера
// есть несколько func.
// 1. loader func с компонентом ленивой загрузки.
// 2. func componentLogin, где вызываю компонент LoginPage.
// 3. func где я проверяю if loader true то показываю ленивую загрузку м если false то компонент LoginPage
// 4. Так же у нас есть в роутинге можно сказать redirect, но в новой версии называется по другому сейчас - Navigate
