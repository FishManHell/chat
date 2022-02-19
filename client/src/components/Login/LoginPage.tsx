import React from 'react';
import Name from "./Name";
import Password from "./Password";

const LoginPage: React.FC = () => {
    return (
        <div className={'wrapper_login_page'}>
            <div className={'wrapper_login_page__main_block_form'}>
                <Name/>
                {/*props name*/}
                <Password/>
                {/*props password*/}

                <div className={'wrapper_login_page__block_button_form'}>
                    <button className={'wrapper_login_page__button_form'}>Login</button>
                {/*handleCheckPassName - onClick*/}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;