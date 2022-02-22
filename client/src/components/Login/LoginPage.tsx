import React, {FC} from 'react';
import Name from "./Name";
import Password from "./Password";
import useInput from "../../hooks/useInput";
import {useLocation} from "react-router-dom";
import {regPassword, regUser} from "../../utils/Regs";
import {Request} from '../../typing/Interfaces'

const LoginPage: FC<Request> = ({requestPost}) => {
    const location = useLocation();
    const name = useInput('');
    const password = useInput('');

    const handleCheckPassName = ():void => {
        const path = location.pathname
        const user = {username: name.value, password: password.value}
        if (regUser.test(name.value) && regPassword.test(password.value)) {
            requestPost(path, user)
        } else {
            alert('Please try again')
        }
    }

    return (
        <div className={'wrapper_login_page'}>
            <div className={'wrapper_login_page__main_block_form'}>
                <Name name={name}/>
                <Password password={password}/>
                <div className={'wrapper_login_page__block_button_form'}>
                    <button className={'wrapper_login_page__button_form'} onClick={handleCheckPassName}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

// This is our Login component and it accepts requestPost from a custom hook usePost which consists of calling the custom hook useInout for input fields,
// hook location to get pathname
// function handleCheckPassName to send and check if the user is up to date on the server.
// Inside the function there is a check in the form of regular expressions that check name and password - whether it fits all the criteria or not
// the component consists of the component name, password and button Login

