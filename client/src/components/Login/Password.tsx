import React, {FC} from 'react';
import {UserPassword} from "../../typing/Interfaces";

const Password: FC<UserPassword> = ({password}) => {
    return (
        <div className={'wrapper_login_page__block_input'}>
            <label className={'wrapper_login_page__label_input'}>Password</label>
            <input
                value={password.value}
                type="password"
                placeholder={'Enter password'}
                className={'wrapper_login_page__input_field'}
                onChange={e => password.onChange(e)}
            />
        </div>
    );
};


export default Password;

// This is our Input component Password
// Here we use a custom hook to control the password field component