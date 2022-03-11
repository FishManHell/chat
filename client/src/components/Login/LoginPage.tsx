import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import {Request} from '../../typing/Interfaces'
import {FormikValues} from "formik";
import ChatForm from "../Chat/ChatForm";
import ErrorComponent from "../Error/ErrorComponent";

const LoginPage: FC<Request> = ({requestPost, error, clearError, checkError}) => {
    const location = useLocation();

    const handleCheckPassName = (values: FormikValues): void => {
        const path = location.pathname
        const user = {username: values.userName, password: values.password}
        requestPost(path, user)
    }

    return (
        <div className={'wrapper_login_page'}>
            <div className={'wrapper_login_page__main_block_form'}>
                <ChatForm handleCheckPassName={handleCheckPassName}/>
                {error && <ErrorComponent clearError={clearError} checkError={checkError}/>}
            </div>
        </div>
    );
};

export default LoginPage;

// This is our Login component,
// and it accepts requestPost from
// a custom hook usePost which consists
// of calling the custom hook useInout for input fields,
// hook location to get pathname
// function handleCheckPassName to send and check if the user is up to date on the server.
// Inside the function there is a check in the form of regular expressions that check name and password - whether it fits all the criteria or not
// the component consists of the component name, password and button Login

