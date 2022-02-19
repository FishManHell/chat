import React from 'react';
import {UserPassword} from "../../typing/Interfaces";

const Password = ({password}: UserPassword) => {
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