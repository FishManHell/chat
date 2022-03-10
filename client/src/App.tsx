import React, {FC} from 'react';
import './App.sass'
import {Routes, Route, Navigate} from "react-router-dom";
import usePost from "./hooks/usePost";
import LoaderComment from "./components/Loader/LoaderComment";
import LoginPage from "./components/Login/LoginPage";
import Chat from "./components/Chat/Chat";
import {JSXNode} from "./typing/Types";

const App:FC = () => {
    const [tokenName, error, loading, requestPost, clearToken] = usePost();

    const loader = ():JSXNode => <LoaderComment/>;

    const componentLogin = ():JSXNode => <LoginPage requestPost={requestPost}/>;

    const checkLoader = ():JSXNode => loading ? loader() : componentLogin();

    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <Routes>
                    {tokenName.token ?
                        <Route path={'chat'} element={<Chat token={tokenName.token} name={tokenName.fullName} clearToken={clearToken}/>}/>
                        :
                        <Route path={'login'} element={checkLoader()}/>
                    }
                    <Route path={'*'} element={<Navigate to={tokenName.token ? 'chat' : 'login'}/>}/>
                </Routes>
            </div>
        </div>
    );
};
export default App;

//This is the initial component where we have routing,
// where we check if we have a token and if so, show
// one page and if not, then leave the old, custom hook usePost
// in which the post request is processed,
// there is lazy loading that handles waiting for a response from the server
// there are several func.
// 1. loader func with a lazy loading component.
// 2. func componentLogin where I call the LoginPage component.
// 3. func where I check if loader true then show lazy loading and if false then LoginPage component
// 4. We can also say redirect in the routing, but in the new version it is called differently now - Navigate

